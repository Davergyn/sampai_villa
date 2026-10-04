import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { villas } from '@/data/villas';
import SectionHeading from '@/components/ui/SectionHeading';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price);
}

export default function FeaturedVillas() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            title="Tempat untuk Sampai."
            subtitle="Ruang yang dirancang untuk menikmati waktu, bersama orang-orang yang berarti."
          />
          <Link
            href="/villas"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7A6A58] hover:gap-3 transition-all flex-shrink-0"
          >
            Lihat semua villa <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {villas.map((villa) => (
            <Link key={villa.id} href={`/villas/${villa.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <Image
                  src={villa.images[0]}
                  alt={villa.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  unoptimized
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[#171717]">
                  Rp {formatPrice(villa.price)} / malam
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#171717] mb-1 group-hover:text-[#7A6A58] transition-colors">
                  {villa.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-[#666] mb-2">
                  <MapPin size={13} />
                  {villa.location}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-[#666]">
                  <Users size={13} />
                  {villa.capacity} Tamu · {villa.bedrooms} Kamar · {villa.bathrooms} Kamar Mandi
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
