import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dalam Sampai Villa Jogja — villa premium dengan jiwa Yogyakarta.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#F7F7F5] pt-28 pb-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7A6A58] mb-3">
            Tentang Kami
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight">
            Dari Yogyakarta, <br />
            <em className="font-light italic">untuk semua yang ingin sampai.</em>
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-[#171717] mb-6 tracking-tight">
              Sebuah Undangan untuk Berhenti Sejenak
            </h2>
            <div className="space-y-4 text-[#666] leading-relaxed">
              <p>
                Sampai Villa Jogja lahir dari keyakinan bahwa setiap orang membutuhkan waktu untuk benar-benar berhenti — dari rutinitas, dari kebisingan, dari segala yang mendesak.
              </p>
              <p>
                Kami memilih Yogyakarta bukan tanpa alasan. Di kota ini, alam masih dekat. Budaya masih hidup. Waktu berjalan lebih pelan. Dan setiap sudutnya menyimpan cerita yang menunggu untuk ditemukan.
              </p>
              <p>
                Setiap villa kami dirancang bukan hanya sebagai tempat bermalam, melainkan sebagai ruang untuk hadir sepenuhnya — bersama orang-orang yang berarti, dengan cara yang paling nyaman.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
              alt="Sampai Villa Jogja"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Mission */}
        <div className="bg-[#171717] rounded-3xl p-10 md:p-16 mb-20">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-6">
            Misi Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight max-w-2xl">
            Menciptakan ruang di mana waktu terasa berharga.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ketenangan', desc: 'Villa yang sunyi, privat, dan jauh dari kebisingan.' },
              { title: 'Kualitas', desc: 'Fasilitas premium yang dipilih dengan cermat untuk kenyamanan tamu.' },
              { title: 'Keautentikan', desc: 'Setiap villa mencerminkan jiwa dan karakter Yogyakarta.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-semibold text-[#171717] mb-10 tracking-tight">
            Nilai-nilai Sampai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { v: 'Kejujuran', d: 'Kami tidak melebih-lebihkan. Apa yang Anda lihat di sini, itu yang akan Anda rasakan.' },
              { v: 'Kehangatan', d: 'Setiap interaksi dengan tim kami dilandasi rasa tulus dan peduli.' },
              { v: 'Kesederhanaan', d: 'Desain yang bersih, pengalaman yang tidak rumit, dan keindahan yang tidak berteriak.' },
              { v: 'Keberlanjutan', d: 'Kami berupaya untuk merawat alam dan lingkungan di sekitar setiap villa kami.' },
            ].map((item) => (
              <div key={item.v} className="p-6 bg-[#F7F7F5] rounded-xl">
                <h3 className="font-semibold text-[#171717] mb-2">{item.v}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
