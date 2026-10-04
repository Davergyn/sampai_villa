import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Location } from '@/data/locations';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <Link
      href={`/villas?location=${location.id}`}
      className="group block relative aspect-[3/4] rounded-2xl overflow-hidden"
    >
      <Image
        src={location.image}
        alt={location.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white font-semibold text-xl mb-1">{location.name}</h3>
        {location.villaIds.length > 0 ? (
          <p className="text-white/60 text-sm mb-4">
            {location.villaIds.length} villa tersedia
          </p>
        ) : (
          <p className="text-white/40 text-sm mb-4">Segera hadir</p>
        )}
        <span className="inline-flex items-center gap-2 text-sm text-white font-medium border border-white/30 rounded-full px-4 py-2 group-hover:bg-white group-hover:text-[#171717] transition-colors">
          Jelajahi <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
