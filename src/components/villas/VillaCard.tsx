import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { Villa } from '@/data/villas';

interface VillaCardProps {
  villa: Villa;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price);
}

export default function VillaCard({ villa }: VillaCardProps) {
  return (
    <Link href={`/villas/${villa.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
        <Image
          src={villa.images[0]}
          alt={villa.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
        {villa.featured && (
          <div className="absolute top-3 left-3 bg-[#7A6A58] text-white rounded-full px-3 py-1 text-xs font-semibold">
            Pilihan
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[#171717]">
          Rp {formatPrice(villa.price)} / malam
        </div>
      </div>
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-[#171717] group-hover:text-[#7A6A58] transition-colors">
            {villa.name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star size={13} className="fill-[#7A6A58] text-[#7A6A58]" />
            <span className="text-xs font-medium text-[#666]">{villa.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#666] mb-2">
          <MapPin size={13} />
          {villa.location}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[#666] mb-3">
          <Users size={13} />
          {villa.capacity} Tamu · {villa.bedrooms} Kamar · {villa.bathrooms} KM
        </div>
        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7A6A58] group-hover:gap-2.5 transition-all">
          Lihat Villa <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
