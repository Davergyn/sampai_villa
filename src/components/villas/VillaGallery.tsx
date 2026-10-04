'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface VillaGalleryProps {
  images: string[];
  villaName: string;
}

export default function VillaGallery({ images, villaName }: VillaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {/* Main image */}
        <div
          className="col-span-2 row-span-2 relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0]}
            alt={`${villaName} - main`}
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-300"
            priority
            unoptimized
          />
        </div>
        {/* Thumbnails */}
        {images.slice(1, 4).map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox(i + 1)}
          >
            <Image
              src={img}
              alt={`${villaName} - ${i + 2}`}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-300"
              unoptimized
            />
            {i === 2 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">+{images.length - 4} foto</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="relative w-full max-w-4xl mx-4 aspect-[16/9]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${villaName} - ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <button
            className="absolute right-4 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
