import Image from 'next/image';

const qualities = [
  { label: 'Privasi', desc: 'Setiap villa dirancang untuk kenyamanan privat — tanpa gangguan, hanya untuk Anda dan tamu Anda.' },
  { label: 'Kenyamanan', desc: 'Fasilitas pilihan dan desain interior hangat yang membuat setiap momen terasa istimewa.' },
  { label: 'Alam', desc: 'Setiap lokasi dipilih karena kedekatannya dengan alam dan keindahan khas Yogyakarta.' },
  { label: 'Kenangan', desc: 'Bukan sekadar tempat bermalam — melainkan tempat cerita-cerita terbaik lahir.' },
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#F7F7F5] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80"
                alt="Pengalaman menginap di Sampai Villa"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-10 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden border-4 border-[#F7F7F5]">
              <Image
                src="https://images.unsplash.com/photo-1540541338537-41369657a388?w=600&q=80"
                alt="Alam sekitar villa"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7A6A58] mb-4">
              Pengalaman Sampai
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#171717] leading-tight tracking-tight mb-8">
              Lebih dari sekadar <br />
              <em className="font-light italic">tempat menginap.</em>
            </h2>
            <div className="space-y-6">
              {qualities.map((q) => (
                <div key={q.label} className="border-l-2 border-[#7A6A58] pl-5">
                  <h3 className="text-base font-semibold text-[#171717] mb-1">{q.label}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
