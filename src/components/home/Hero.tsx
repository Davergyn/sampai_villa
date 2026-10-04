'use client';

import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=90"
          alt="Sampai Villa Jogja"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-6">
            Sampai Villa Jogja
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
            Tempat untuk <br />
            <em className="italic font-light">berhenti sejenak.</em>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Temukan villa pilihan Sampai di berbagai sudut Yogyakarta.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/villas"
              className="inline-flex items-center px-8 py-4 bg-white text-[#171717] text-sm font-semibold rounded-full hover:bg-[#F7F7F5] transition-colors"
            >
              Jelajahi Villa
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center px-8 py-4 border border-white/50 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Lihat Lokasi
            </Link>
          </div>
        </div>
      </div>

      {/* Search Panel — overlapping below hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 -mb-16">
        <SearchBar />
      </div>
    </section>
  );
}
