'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (checkin) params.set('checkin', checkin);
    if (checkout) params.set('checkout', checkout);
    if (guests) params.set('guests', String(guests));
    router.push(`/villas?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#E7E7E7] p-4 md:p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 md:divide-x md:divide-[#E7E7E7]">
        {/* Location */}
        <div className="flex items-center gap-3 md:px-5 first:pl-0">
          <MapPin size={18} className="text-[#7A6A58] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-0.5">
              Lokasi
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm font-medium text-[#171717] bg-transparent outline-none cursor-pointer"
            >
              <option value="">Semua Lokasi</option>
              <option value="sleman">Sleman</option>
              <option value="bantul">Bantul</option>
              <option value="kulon-progo">Kulon Progo</option>
              <option value="gunungkidul">Gunungkidul</option>
              <option value="yogyakarta-kota">Yogyakarta Kota</option>
            </select>
          </div>
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-3 md:px-5">
          <Calendar size={18} className="text-[#7A6A58] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-0.5">
              Check-in
            </label>
            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="w-full text-sm font-medium text-[#171717] bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-3 md:px-5">
          <Calendar size={18} className="text-[#7A6A58] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-0.5">
              Check-out
            </label>
            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="w-full text-sm font-medium text-[#171717] bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 md:px-5">
          <Users size={18} className="text-[#7A6A58] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="text-[10px] font-semibold tracking-widest uppercase text-[#666] block mb-0.5">
              Tamu
            </label>
            <input
              type="number"
              min={1}
              max={20}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full text-sm font-medium text-[#171717] bg-transparent outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-3 flex justify-end">
        <button
          onClick={handleSearch}
          className="inline-flex items-center gap-2 px-7 py-3 bg-[#7A6A58] text-white text-sm font-semibold rounded-full hover:bg-[#6a5a48] transition-colors"
        >
          <Search size={16} />
          Cari Villa
        </button>
      </div>
    </div>
  );
}
