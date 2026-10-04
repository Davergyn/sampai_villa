'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/villas', label: 'Villa' },
    { href: '/locations', label: 'Lokasi' },
    { href: '/about', label: 'Tentang' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b border-[#E7E7E7] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <span
                className={`text-xl font-bold tracking-widest uppercase transition-colors ${
                  isScrolled ? 'text-[#171717]' : 'text-white'
                }`}
              >
                SAMPAI
              </span>
              <span
                className={`text-[9px] font-medium tracking-[0.25em] uppercase transition-colors ${
                  isScrolled ? 'text-[#666666]' : 'text-white/70'
                }`}
              >
                VILLA JOGJA
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-[#171717]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/villas"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#7A6A58] text-white text-sm font-medium rounded-full hover:bg-[#6a5a48] transition-colors"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-md transition-colors ${
                  isScrolled ? 'text-[#171717]' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-[#171717] border-b border-[#E7E7E7] pb-6"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/villas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-6 py-3.5 bg-[#7A6A58] text-white text-base font-medium rounded-full"
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}
