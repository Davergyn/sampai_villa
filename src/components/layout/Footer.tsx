import Link from 'next/link';
import { MessageCircle, AtSign, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-xl font-bold tracking-widest uppercase">SAMPAI</span>
              <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-white/50">
                VILLA JOGJA
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Ruang-ruang yang dirancang untuk menikmati waktu, bersama orang-orang yang berarti, di sudut-sudut terbaik Yogyakarta.
            </p>
            <div className="flex items-center gap-2 mt-4 text-white/50 text-sm">
              <MapPin size={14} />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Navigasi
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/villas', label: 'Villa Kami' },
                { href: '/locations', label: 'Lokasi' },
                { href: '/about', label: 'Tentang Kami' },
                { href: '/contact', label: 'Kontak' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Hubungi Kami
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/sampaivilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <AtSign size={16} />
                @sampaivilla
              </a>
              <a
                href="mailto:halo@sampaivilla.com"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={16} />
                halo@sampaivilla.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Sampai Villa Jogja. Seluruh hak dilindungi.
          </p>
          <p className="text-white/20 text-xs">
            Dibuat dengan penuh rasa untuk Yogyakarta.
          </p>
        </div>
      </div>
    </footer>
  );
}
