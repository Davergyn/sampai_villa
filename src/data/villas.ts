export interface Villa {
  id: string;
  slug: string;
  name: string;
  location: string;
  locationId: string;
  description: string;
  shortDescription: string;
  images: string[];
  price: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  facilities: string[];
  coordinates: { lat: number; lng: number };
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export const villas: Villa[] = [
  {
    id: '1',
    slug: 'sampai-villa-kaliurang',
    name: 'Sampai Villa Kaliurang',
    location: 'Kaliurang, Sleman',
    locationId: 'sleman',
    description: 'Tersembunyi di ketinggian lereng Merapi, Sampai Villa Kaliurang menawarkan ketenangan yang sesungguhnya. Udara segar pegunungan, pemandangan hijau yang luas, dan desain interior yang hangat menjadikan villa ini sempurna untuk melepas penat bersama keluarga atau orang-orang terdekat. Nikmati sarapan di teras dengan latar belakang Gunung Merapi yang megah.',
    shortDescription: 'Villa pegunungan dengan udara segar dan pemandangan Merapi yang memukau.',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338537-41369657a388?w=1200&q=80',
    ],
    price: 1200000,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    facilities: ['Private Pool', 'Wi-Fi', 'Air Conditioning', 'Kitchen', 'Parking', 'Smart TV', 'BBQ Area', 'Garden'],
    coordinates: { lat: -7.5833, lng: 110.4167 },
    featured: true,
    rating: 4.9,
    reviewCount: 48,
  },
  {
    id: '2',
    slug: 'sampai-villa-pakem',
    name: 'Sampai Villa Pakem',
    location: 'Pakem, Sleman',
    locationId: 'sleman',
    description: 'Sampai Villa Pakem adalah surga kecil di antara pepohonan rindang Pakem. Villa ini dirancang untuk dua hingga empat tamu yang mencari keintiman dan ketenangan. Setiap sudut ruangan dirancang dengan cermat menggunakan material alami yang memancarkan kehangatan dan kenyamanan.',
    shortDescription: 'Surga kecil di antara pepohonan rindang untuk pengalaman menginap yang intim.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
      'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
    ],
    price: 950000,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    facilities: ['Private Pool', 'Wi-Fi', 'Air Conditioning', 'Kitchen', 'Parking', 'Smart TV'],
    coordinates: { lat: -7.6000, lng: 110.4333 },
    featured: true,
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: '3',
    slug: 'sampai-villa-bantul',
    name: 'Sampai Villa Bantul',
    location: 'Bantul, Bantul',
    locationId: 'bantul',
    description: 'Terletak di jantung Bantul yang kaya budaya, Sampai Villa Bantul memadukan estetika Jawa tradisional dengan kenyamanan modern. Dekat dengan berbagai sentra kerajinan dan pertunjukan seni lokal, villa ini adalah pilihan sempurna bagi Anda yang ingin merasakan jiwa Yogyakarta yang sesungguhnya.',
    shortDescription: 'Villa bernuansa budaya Jawa di kawasan seni Bantul yang autentik.',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    ],
    price: 850000,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    facilities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'Parking', 'Smart TV', 'Garden'],
    coordinates: { lat: -7.8833, lng: 110.3333 },
    featured: false,
    rating: 4.7,
    reviewCount: 27,
  },
  {
    id: '4',
    slug: 'sampai-villa-sleman',
    name: 'Sampai Villa Sleman',
    location: 'Sleman, Sleman',
    locationId: 'sleman',
    description: 'Sampai Villa Sleman adalah villa terbesar kami, ideal untuk gathering keluarga besar atau retreat bersama rekan kerja. Dengan empat kamar tidur yang luas, kolam renang privat yang besar, dan ruang berkumpul yang lapang, villa ini menjamin setiap momen bersama terasa istimewa.',
    shortDescription: 'Villa luas ideal untuk keluarga besar dan gathering dengan kolam renang privat.',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338537-41369657a388?w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
      'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=1200&q=80',
    ],
    price: 1100000,
    capacity: 8,
    bedrooms: 4,
    bathrooms: 3,
    facilities: ['Private Pool', 'Wi-Fi', 'Air Conditioning', 'Kitchen', 'Parking', 'Smart TV', 'BBQ Area', 'Garden', 'Outdoor Dining'],
    coordinates: { lat: -7.7167, lng: 110.3500 },
    featured: true,
    rating: 4.8,
    reviewCount: 56,
  },
  {
    id: '5',
    slug: 'sampai-villa-jogja-selatan',
    name: 'Sampai Villa Jogja Selatan',
    location: 'Bantul Selatan, Bantul',
    locationId: 'bantul',
    description: 'Dekat dengan pesisir selatan Yogyakarta, Sampai Villa Jogja Selatan menghadirkan pengalaman yang unik: suasana pedesaan yang tenang dengan aksesibilitas ke pantai-pantai indah di Bantul. Cocok untuk pasangan atau keluarga kecil yang ingin menjelajahi keindahan alam Jogja bagian selatan.',
    shortDescription: 'Villa nyaman dekat pantai selatan Jogja untuk eksplorasi alam yang mudah.',
    images: [
      'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
    ],
    price: 750000,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    facilities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'Parking', 'Smart TV'],
    coordinates: { lat: -7.9833, lng: 110.3167 },
    featured: false,
    rating: 4.6,
    reviewCount: 19,
  },
  {
    id: '6',
    slug: 'sampai-villa-gunungkidul',
    name: 'Sampai Villa Gunungkidul',
    location: 'Wonosari, Gunungkidul',
    locationId: 'gunungkidul',
    description: 'Berdiri di antara tebing-tebing karst yang dramatis dan hamparan sawah yang tenang, Sampai Villa Gunungkidul adalah pelarian sempurna dari keramaian kota. Dengan pemandangan yang tak tertandingi dan suasana yang benar-benar sunyi, villa premium kami di Gunungkidul dirancang untuk mereka yang menghargai keindahan alam dan ketenangan mutlak.',
    shortDescription: 'Villa premium di antara tebing karst Gunungkidul dengan pemandangan dramatis.',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338537-41369657a388?w=1200&q=80',
    ],
    price: 1400000,
    capacity: 8,
    bedrooms: 4,
    bathrooms: 3,
    facilities: ['Private Pool', 'Wi-Fi', 'Air Conditioning', 'Kitchen', 'Parking', 'Smart TV', 'BBQ Area', 'Garden', 'Outdoor Dining', 'Telescope'],
    coordinates: { lat: -7.9833, lng: 110.5917 },
    featured: true,
    rating: 4.9,
    reviewCount: 41,
  },
];

export function getVillaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

export function getVillasByLocation(locationId: string): Villa[] {
  return villas.filter((v) => v.locationId === locationId);
}

export function getFeaturedVillas(): Villa[] {
  return villas.filter((v) => v.featured);
}
