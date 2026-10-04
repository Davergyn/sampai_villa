import Hero from '@/components/home/Hero';
import FeaturedVillas from '@/components/home/FeaturedVillas';
import ExperienceSection from '@/components/home/ExperienceSection';
import WhySampai from '@/components/home/WhySampai';
import LocationsSection from '@/components/home/LocationsSection';
import CtaSection from '@/components/home/CtaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sampai Villa Jogja — Villa Premium di Yogyakarta',
  description:
    'Temukan villa premium Sampai di berbagai sudut Yogyakarta. Privasi terjaga, lokasi pilihan, dan pengalaman menginap yang tak terlupakan.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="pt-20 md:pt-24">
        <FeaturedVillas />
        <ExperienceSection />
        <WhySampai />
        <LocationsSection />
        <CtaSection />
      </div>
    </>
  );
}
