import type { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationCard from '@/components/locations/LocationCard';

export const metadata: Metadata = {
  title: 'Lokasi Villa',
  description:
    'Jelajahi villa Sampai di lima kawasan terbaik Yogyakarta: Sleman, Bantul, Kulon Progo, Gunungkidul, dan Yogyakarta Kota.',
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F7F7F5] pt-28 pb-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7A6A58] mb-3">
            Sampai Villa Jogja
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight mb-4">
            Lokasi Kami
          </h1>
          <p className="text-[#666] text-lg max-w-xl">
            Lima kawasan terbaik Yogyakarta, dipilih karena keindahan alam, budaya, dan suasananya yang khas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </div>
  );
}
