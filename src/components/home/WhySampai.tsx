const features = [
  {
    number: '01',
    title: 'Privasi yang Terjaga',
    description:
      'Setiap villa adalah ruang eksklusif Anda. Tanpa tamu lain, tanpa basa-basi — hanya Anda dan momen yang Anda ciptakan.',
  },
  {
    number: '02',
    title: 'Lokasi Pilihan di Yogyakarta',
    description:
      'Dari lereng Merapi yang sejuk hingga tebing karst Gunungkidul yang dramatis — kami memilih lokasi terbaik Jogja.',
  },
  {
    number: '03',
    title: 'Ruang untuk Berkumpul',
    description:
      'Desain setiap villa mengutamakan area berkumpul yang nyaman: teras luas, ruang makan bersama, dan kolam yang mengundang.',
  },
  {
    number: '04',
    title: 'Pengalaman Menginap yang Nyaman',
    description:
      'Kasur premium, linen berkualitas, dapur lengkap, dan fasilitas pilihan — semua yang dibutuhkan untuk menginap sempurna.',
  },
];

export default function WhySampai() {
  return (
    <section className="bg-[#171717] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-16">
          Mengapa Sampai
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {features.map((f) => (
            <div key={f.number} className="bg-[#171717] p-8 md:p-12">
              <span className="text-6xl md:text-7xl font-bold text-white/10 block mb-6 leading-none">
                {f.number}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
