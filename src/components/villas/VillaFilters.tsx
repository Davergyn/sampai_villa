'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';

interface VillaFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  onSortChange: (sort: string) => void;
  sort: string;
}

export interface FilterState {
  location: string;
  minGuests: number;
  maxPrice: number;
  facilities: string[];
}

const facilityOptions = ['Private Pool', 'Wi-Fi', 'Air Conditioning', 'Kitchen', 'BBQ Area', 'Garden'];

const locationOptions = [
  { value: '', label: 'Semua Lokasi' },
  { value: 'sleman', label: 'Sleman' },
  { value: 'bantul', label: 'Bantul' },
  { value: 'kulon-progo', label: 'Kulon Progo' },
  { value: 'gunungkidul', label: 'Gunungkidul' },
  { value: 'yogyakarta-kota', label: 'Yogyakarta Kota' },
];

export default function VillaFilters({ onFilterChange, onSortChange, sort }: VillaFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    minGuests: 0,
    maxPrice: 2000000,
    facilities: [],
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFilterChange(next);
  };

  const toggleFacility = (fac: string) => {
    const next = filters.facilities.includes(fac)
      ? filters.facilities.filter((f) => f !== fac)
      : [...filters.facilities, fac];
    updateFilter('facilities', next);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
          Urutkan
        </label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full border border-[#E7E7E7] rounded-lg px-3 py-2 text-sm text-[#171717] outline-none focus:border-[#7A6A58]"
        >
          <option value="recommended">Rekomendasi</option>
          <option value="price-asc">Harga: Terendah</option>
          <option value="price-desc">Harga: Tertinggi</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
          Lokasi
        </label>
        <select
          value={filters.location}
          onChange={(e) => updateFilter('location', e.target.value)}
          className="w-full border border-[#E7E7E7] rounded-lg px-3 py-2 text-sm text-[#171717] outline-none focus:border-[#7A6A58]"
        >
          {locationOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Min Guests */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
          Minimum Tamu
        </label>
        <select
          value={filters.minGuests}
          onChange={(e) => updateFilter('minGuests', Number(e.target.value))}
          className="w-full border border-[#E7E7E7] rounded-lg px-3 py-2 text-sm text-[#171717] outline-none focus:border-[#7A6A58]"
        >
          <option value={0}>Semua</option>
          <option value={2}>2+</option>
          <option value={4}>4+</option>
          <option value={6}>6+</option>
          <option value={8}>8+</option>
        </select>
      </div>

      {/* Max Price */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
          Harga Maks: Rp {new Intl.NumberFormat('id-ID').format(filters.maxPrice)}
        </label>
        <input
          type="range"
          min={500000}
          max={2000000}
          step={100000}
          value={filters.maxPrice}
          onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
          className="w-full accent-[#7A6A58]"
        />
      </div>

      {/* Facilities */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-3">
          Fasilitas
        </label>
        <div className="flex flex-wrap gap-2">
          {facilityOptions.map((fac) => (
            <button
              key={fac}
              onClick={() => toggleFacility(fac)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filters.facilities.includes(fac)
                  ? 'bg-[#7A6A58] border-[#7A6A58] text-white'
                  : 'border-[#E7E7E7] text-[#666] hover:border-[#7A6A58]'
              }`}
            >
              {fac}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>

      {/* Mobile filter button + drawer */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#E7E7E7] rounded-full text-sm font-medium text-[#171717]"
        >
          <SlidersHorizontal size={16} /> Filter &amp; Urutkan
        </button>

        {showMobileFilters && (
          <div className="fixed inset-0 z-50 flex">
            <div className="ml-auto w-full max-w-sm bg-white h-full overflow-y-auto">
              <div className="flex items-center justify-between p-5 border-b border-[#E7E7E7]">
                <h2 className="font-semibold text-[#171717]">Filter &amp; Urutkan</h2>
                <button onClick={() => setShowMobileFilters(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="p-5">
                <FilterContent />
              </div>
              <div className="p-5 border-t border-[#E7E7E7]">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full py-3 bg-[#7A6A58] text-white rounded-full text-sm font-semibold"
                >
                  Terapkan Filter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
