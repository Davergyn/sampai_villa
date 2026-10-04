'use client';

import { useState } from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { Villa } from '@/data/villas';

interface VillaBookingPanelProps {
  villa: Villa;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price);
}

export default function VillaBookingPanel({ villa }: VillaBookingPanelProps) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(2);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const nights =
    checkin && checkout
      ? Math.max(
          0,
          Math.round(
            (new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const total = nights * villa.price;

  const handleReservation = () => {
    if (!checkin || !checkout || nights <= 0) {
      alert('Pilih tanggal check-in dan check-out terlebih dahulu.');
      return;
    }
    setShowConfirmation(true);
  };

  const waMessage = encodeURIComponent(
    `Halo, saya tertarik dengan ${villa.name} di Yogyakarta. Mohon informasi ketersediaan.`
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  if (showConfirmation) {
    return (
      <div className="bg-white border border-[#E7E7E7] rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} className="text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#171717] mb-2">Permintaan Diterima!</h3>
        <p className="text-sm text-[#666] mb-6">
          Tim kami akan segera menghubungi Anda untuk konfirmasi reservasi {villa.name}.
        </p>
        <div className="bg-[#F7F7F5] rounded-xl p-4 text-sm text-left mb-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-[#666]">Check-in</span>
            <span className="font-medium">{checkin}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666]">Check-out</span>
            <span className="font-medium">{checkout}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#666]">Tamu</span>
            <span className="font-medium">{guests} orang</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#E7E7E7]">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">Rp {formatPrice(total)}</span>
          </div>
        </div>
        <button
          onClick={() => setShowConfirmation(false)}
          className="text-sm text-[#7A6A58] hover:underline"
        >
          Ubah Tanggal
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E7E7E7] rounded-2xl p-6 shadow-sm">
      <div className="mb-5">
        <span className="text-2xl font-bold text-[#171717]">Rp {formatPrice(villa.price)}</span>
        <span className="text-[#666] text-sm"> / malam</span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="border border-[#E7E7E7] rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-[#E7E7E7]">
            <div className="p-3">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-1">
                Check-in
              </label>
              <input
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="w-full text-sm text-[#171717] outline-none"
              />
            </div>
            <div className="p-3">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-1">
                Check-out
              </label>
              <input
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="w-full text-sm text-[#171717] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="border border-[#E7E7E7] rounded-xl p-3">
          <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-1">
            Tamu
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#171717]">{guests} tamu</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-7 h-7 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#171717] hover:border-[#7A6A58] transition-colors"
              >
                -
              </button>
              <button
                onClick={() => setGuests(Math.min(villa.capacity, guests + 1))}
                className="w-7 h-7 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#171717] hover:border-[#7A6A58] transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {nights > 0 && (
        <div className="bg-[#F7F7F5] rounded-xl p-4 mb-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#666]">Rp {formatPrice(villa.price)} × {nights} malam</span>
            <span>Rp {formatPrice(total)}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t border-[#E7E7E7]">
            <span>Total</span>
            <span>Rp {formatPrice(total)}</span>
          </div>
        </div>
      )}

      <button
        onClick={handleReservation}
        className="w-full py-3.5 bg-[#7A6A58] text-white font-semibold rounded-full mb-3 hover:bg-[#6a5a48] transition-colors"
      >
        Reservasi Sekarang
      </button>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 border border-[#E7E7E7] text-[#171717] font-medium rounded-full flex items-center justify-center gap-2 hover:bg-[#F7F7F5] transition-colors text-sm"
      >
        <MessageCircle size={16} className="text-green-600" />
        Chat via WhatsApp
      </a>

      <p className="text-center text-xs text-[#666] mt-4">
        Tidak ada biaya sampai konfirmasi
      </p>
    </div>
  );
}
