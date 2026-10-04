import { Villa } from '@/data/villas';
import VillaCard from './VillaCard';

interface VillaGridProps {
  villas: Villa[];
}

export default function VillaGrid({ villas }: VillaGridProps) {
  if (villas.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[#666] text-lg">Tidak ada villa yang ditemukan.</p>
        <p className="text-[#666] text-sm mt-2">Coba ubah filter pencarian Anda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {villas.map((villa) => (
        <VillaCard key={villa.id} villa={villa} />
      ))}
    </div>
  );
}
