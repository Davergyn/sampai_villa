import Link from 'next/link';
import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Sampai Villa Jogja"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#171717]/75" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-6">
          Mulai Perjalananmu
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
          Sudah tahu mau sampai ke mana?
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Temukan villa yang sesuai untuk perjalananmu di Yogyakarta.
        </p>
        <Link
          href="/villas"
          className="inline-flex items-center px-10 py-4 bg-white text-[#171717] text-sm font-semibold rounded-full hover:bg-[#F7F7F5] transition-colors"
        >
          Temukan Villa
        </Link>
      </div>
    </section>
  );
}
