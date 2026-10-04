import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sampai Villa Jogja — Villa Premium di Yogyakarta',
    template: '%s | Sampai Villa Jogja',
  },
  description:
    'Temukan villa premium Sampai di berbagai sudut Yogyakarta. Privasi terjaga, lokasi pilihan, dan pengalaman menginap yang tak terlupakan.',
  keywords: ['villa yogyakarta', 'villa jogja', 'sampai villa', 'penginapan yogyakarta', 'villa sleman', 'villa bantul'],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Sampai Villa Jogja',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={dmSans.variable}>
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
