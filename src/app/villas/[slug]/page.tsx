import { notFound } from 'next/navigation';
import { villas, getVillaBySlug } from '@/data/villas';
import VillaGallery from '@/components/villas/VillaGallery';
import VillaBookingPanel from '@/components/villas/VillaBookingPanel';
import {
  MapPin, Users, BedDouble, Bath, Wifi, Tv, Car, UtensilsCrossed, Waves, Star,
  Flame, Trees, Telescope
} from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const villa = getVillaBySlug(params.slug);
  if (!villa) return {};
  return {
    title: villa.name,
    description: villa.shortDescription,
  };
}

const facilityIcons: Record<string, React.ReactNode> = {
  'Private Pool': <Waves size={18} />,
  'Wi-Fi': <Wifi size={18} />,
  'Air Conditioning': <Star size={18} />,
  'Kitchen': <UtensilsCrossed size={18} />,
  'Parking': <Car size={18} />,
  'Smart TV': <Tv size={18} />,
  'BBQ Area': <Flame size={18} />,
  'Garden': <Trees size={18} />,
  'Outdoor Dining': <UtensilsCrossed size={18} />,
  'Telescope': <Telescope size={18} />,
};

export default function VillaDetailPage({ params }: PageProps) {
  const villa = getVillaBySlug(params.slug);
  if (!villa) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="text-sm text-[#666] mb-6">
          <a href="/villas" className="hover:text-[#7A6A58] transition-colors">Villa</a>
          <span className="mx-2">·</span>
          <span>{villa.name}</span>
        </div>

        {/* Gallery */}
        <VillaGallery images={villa.images} villaName={villa.name} />

        {/* Main Content + Booking Panel */}
        <div className="mt-10 flex flex-col lg:flex-row gap-12">
          {/* Left: Info */}
          <div className="flex-1 min-w-0">
            {/* Name + Rating */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-[#171717] tracking-tight">
                {villa.name}
              </h1>
              <div className="flex items-center gap-2">
                <Star size={16} className="fill-[#7A6A58] text-[#7A6A58]" />
                <span className="font-semibold text-[#171717]">{villa.rating}</span>
                <span className="text-[#666] text-sm">({villa.reviewCount} ulasan)</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-[#666] mb-8">
              <MapPin size={16} />
              <span>{villa.location}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[#F7F7F5] rounded-xl mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-[#7A6A58] mb-1">
                  <Users size={18} />
                </div>
                <div className="text-xl font-semibold text-[#171717]">{villa.capacity}</div>
                <div className="text-xs text-[#666]">Tamu</div>
              </div>
              <div className="text-center border-x border-[#E7E7E7]">
                <div className="flex items-center justify-center gap-1.5 text-[#7A6A58] mb-1">
                  <BedDouble size={18} />
                </div>
                <div className="text-xl font-semibold text-[#171717]">{villa.bedrooms}</div>
                <div className="text-xs text-[#666]">Kamar Tidur</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-[#7A6A58] mb-1">
                  <Bath size={18} />
                </div>
                <div className="text-xl font-semibold text-[#171717]">{villa.bathrooms}</div>
                <div className="text-xs text-[#666]">Kamar Mandi</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-[#171717] mb-4">Tentang Villa Ini</h2>
              <p className="text-[#666] leading-relaxed">{villa.description}</p>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="text-xl font-semibold text-[#171717] mb-6">Fasilitas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {villa.facilities.map((fac) => (
                  <div key={fac} className="flex items-center gap-3 p-4 bg-[#F7F7F5] rounded-xl">
                    <span className="text-[#7A6A58]">
                      {facilityIcons[fac] ?? <Star size={18} />}
                    </span>
                    <span className="text-sm font-medium text-[#171717]">{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Panel */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <VillaBookingPanel villa={villa} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
