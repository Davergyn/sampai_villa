'use client';

import { useState } from 'react';
import { MessageCircle, Share2, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F7F7F5] pt-28 pb-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7A6A58] mb-3">
            Hubungi Kami
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight">
            Ada yang ingin <br />
            <em className="font-light italic">Anda tanyakan?</em>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-[#171717] mb-8">Kontak Langsung</h2>
            <div className="space-y-5">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#F7F7F5] rounded-xl hover:bg-[#E7E7E7] transition-colors group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#171717] group-hover:text-[#7A6A58] transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-sm text-[#666]">+62 812-3456-7890</div>
                </div>
              </a>

              <a
                href="https://instagram.com/sampaivilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#F7F7F5] rounded-xl hover:bg-[#E7E7E7] transition-colors group"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Share2 size={20} className="text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#171717] group-hover:text-[#7A6A58] transition-colors">
                    Instagram
                  </div>
                  <div className="text-sm text-[#666]">@sampaivilla</div>
                </div>
              </a>

              <a
                href="mailto:halo@sampaivilla.com"
                className="flex items-center gap-4 p-5 bg-[#F7F7F5] rounded-xl hover:bg-[#E7E7E7] transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#171717] group-hover:text-[#7A6A58] transition-colors">
                    Email
                  </div>
                  <div className="text-sm text-[#666]">halo@sampaivilla.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-[#F7F7F5] rounded-xl">
                <div className="w-12 h-12 bg-[#F0EDE8] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#7A6A58]" />
                </div>
                <div>
                  <div className="font-semibold text-[#171717]">Lokasi</div>
                  <div className="text-sm text-[#666]">Yogyakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-[#171717] mb-8">Kirim Pesan</h2>
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-2">Pesan Terkirim!</h3>
                <p className="text-[#666]">Kami akan menghubungi Anda segera.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#E7E7E7] rounded-xl px-4 py-3 text-sm text-[#171717] outline-none focus:border-[#7A6A58] transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#E7E7E7] rounded-xl px-4 py-3 text-sm text-[#171717] outline-none focus:border-[#7A6A58] transition-colors"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-[#666] block mb-2">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#E7E7E7] rounded-xl px-4 py-3 text-sm text-[#171717] outline-none focus:border-[#7A6A58] transition-colors resize-none"
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7A6A58] text-white font-semibold rounded-full hover:bg-[#6a5a48] transition-colors"
                >
                  <Send size={16} />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
