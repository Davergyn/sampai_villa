'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { villas as allVillas } from '@/data/villas';
import VillaGrid from '@/components/villas/VillaGrid';
import VillaFilters, { FilterState } from '@/components/villas/VillaFilters';
import type { Villa } from '@/data/villas';

function VillasContent() {
  const searchParams = useSearchParams();
  const [sort, setSort] = useState('recommended');
  const [filters, setFilters] = useState<FilterState>({
    location: searchParams.get('location') || '',
    minGuests: searchParams.get('guests') ? Number(searchParams.get('guests')) : 0,
    maxPrice: 2000000,
    facilities: [],
  });

  const filtered = allVillas
    .filter((v) => {
      if (filters.location && v.locationId !== filters.location) return false;
      if (filters.minGuests && v.capacity < filters.minGuests) return false;
      if (v.price > filters.maxPrice) return false;
      if (filters.facilities.length > 0) {
        if (!filters.facilities.every((f) => v.facilities.includes(f))) return false;
      }
      return true;
    })
    .sort((a: Villa, b: Villa) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-[#F7F7F5] pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7A6A58] mb-3">
            Sampai Villa Jogja
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight">
            Villa Kami
          </h1>
          <p className="mt-3 text-[#666] text-lg">
            {filtered.length} villa tersedia di Yogyakarta
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <p className="text-sm text-[#666]">{filtered.length} villa ditemukan</p>
          <VillaFilters
            onFilterChange={setFilters}
            onSortChange={setSort}
            sort={sort}
          />
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-6">
                Filter
              </h2>
              <VillaFilters
                onFilterChange={setFilters}
                onSortChange={setSort}
                sort={sort}
              />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <VillaGrid villas={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VillasPage() {
  return (
    <Suspense>
      <VillasContent />
    </Suspense>
  );
}
