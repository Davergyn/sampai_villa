export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  villaIds: string[];
}

export const locations: Location[] = [
  {
    id: 'sleman',
    name: 'Sleman',
    description: 'Kawasan pegunungan di utara Yogyakarta dengan udara sejuk dan pemandangan Gunung Merapi yang spektakuler.',
    image: 'https://images.unsplash.com/photo-1540541338537-41369657a388?w=800&q=80',
    villaIds: ['1', '2', '4'],
  },
  {
    id: 'bantul',
    name: 'Bantul',
    description: 'Kawasan selatan Yogyakarta yang kaya warisan budaya, seni kerajinan, dan akses mudah ke pantai indah.',
    image: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=800&q=80',
    villaIds: ['3', '5'],
  },
  {
    id: 'kulon-progo',
    name: 'Kulon Progo',
    description: 'Barat Yogyakarta yang masih alami, tenang, dan menawarkan panorama alam perbukitan Menoreh yang hijau.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    villaIds: [],
  },
  {
    id: 'gunungkidul',
    name: 'Gunungkidul',
    description: 'Timur Yogyakarta dengan tebing-tebing karst yang dramatis, gua purba, dan pantai tersembunyi yang menakjubkan.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    villaIds: ['6'],
  },
  {
    id: 'yogyakarta-kota',
    name: 'Yogyakarta Kota',
    description: 'Pusat kota bersejarah dengan warisan budaya Jawa, Keraton, Malioboro, dan kehidupan urban yang semarak.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    villaIds: [],
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}
