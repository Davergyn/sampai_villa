import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function LocationsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Jelajahi Lokasi"
          subtitle="Lima kawasan terbaik Yogyakarta, dipilih untuk keindahan alam dan suasananya yang khas."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/villas?location=${loc.id}`}
              className="group block relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-semibold text-base mb-1">{loc.name}</h3>
                {loc.villaIds.length > 0 && (
                  <p className="text-white/60 text-xs mb-3">
                    {loc.villaIds.length} villa tersedia
                  </p>
                )}
                <span className="inline-flex items-center gap-1.5 text-xs text-white/80 font-medium group-hover:gap-2.5 transition-all">
                  Jelajahi <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
