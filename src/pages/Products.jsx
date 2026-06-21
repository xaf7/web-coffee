import React, { useState, useEffect } from "react";
import { useStore } from "../store/useStore";

// HANYA IMPORT FOOTER (Navbar sudah dihandle oleh App.jsx / Layout global)
import Footer from "../components/layout/Footer";

import {
  Search,
  Star,
  ShoppingBag,
  Flame,
  ChevronLeft,
  ChevronRight,
  Coffee,
} from "lucide-react";

export default function Products() {
  const { products, addToCart, showToast } = useStore();
  const displayProducts = products;

  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mengambil 5 produk terpopuler untuk bagian Slider Penawar Penat
  const popularProducts = [...displayProducts]
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 5);

  // Auto-play Slider (Kiri ke Kanan) tiap 4 detik
  useEffect(() => {
    if (popularProducts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [popularProducts.length]);

  // Filter Data untuk Grid Utama di Bawah
  const filtered = displayProducts.filter((p) => {
    const matchCat = filter === "Semua" || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % popularProducts.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + popularProducts.length) % popularProducts.length,
    );

  return (
    // Tetap gunakan flex-col agar footer nempel rapi di paling bawah halaman
    <div className="bg-neutral-50/50 min-h-screen text-slate-800 flex flex-col justify-between">
      {/* AREA UTAMA KONTEN KATALOG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 w-full flex-grow">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6 border-slate-200/60">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-orange-500 flex items-center gap-1.5 mb-1">
              <Coffee className="w-3 h-3" /> Time out for your soul
            </span>
            <h1 className="text-2xl md:text-4xl font-heading font-semibold text-slate-900 tracking-tight">
              Katalog Menu Penawar Penat
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Temukan sajian terbaik untuk mengembalikan energi dan fokusmu.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shadow-sm rounded-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* TOP SLIDER SECTION (PRODUK YANG SERING DITAMBAHKAN) */}
        {popularProducts.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 px-1">
              <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
              <h2 className="text-sm md:text-base font-heading font-semibold text-slate-900">
                Sering Ditambahkan
              </h2>
              <span className="bg-orange-500/10 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-orange-200/40">
                Best Seller
              </span>
            </div>

            {/* Slider Container */}
            <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden h-44 sm:h-56 shadow-sm">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {popularProducts.map((p) => (
                  <div
                    key={`slide-${p.id}`}
                    className="min-w-full h-full flex relative group"
                  >
                    {/* Foto Latar Slider */}
                    <div className="absolute inset-0 md:relative md:w-1/2 h-full overflow-hidden bg-neutral-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:bg-gradient-to-l md:from-transparent md:to-white" />
                    </div>

                    {/* Konten Detail Slider */}
                    <div className="absolute inset-0 md:relative md:w-1/2 p-4 sm:p-6 flex flex-col justify-center z-10 space-y-2 bg-white/80 md:bg-transparent backdrop-blur-[1px] md:backdrop-blur-none">
                      <span className="text-[8px] sm:text-[9px] tracking-wider font-bold uppercase px-2 py-0.5 bg-slate-900 text-white rounded w-max">
                        {p.category}
                      </span>
                      <h3 className="text-base sm:text-xl font-heading font-semibold text-slate-900 line-clamp-1">
                        {p.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px]">
                        <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                          <Star className="w-3 h-3 fill-current" /> {p.rating}
                        </div>
                        <span className="text-slate-400">
                          ({p.salesCount}+ Pesanan)
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-1 max-w-xs gap-4">
                        <span className="text-sm sm:text-lg font-bold text-orange-500">
                          Rp {p.price.toLocaleString("id-ID")}
                        </span>
                        <button
                          onClick={() => {
                            addToCart(p);
                            showToast(`${p.name} siap menemani rehatmu!`);
                          }}
                          className="bg-slate-900 hover:bg-orange-500 text-white text-[10px] sm:text-xs font-medium px-4 py-2 rounded-lg transition-all active:scale-95 shadow-sm"
                        >
                          + Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Manual Slider */}
              <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-slate-900 hover:text-white p-1.5 rounded-full border border-slate-200 shadow-sm transition z-20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-slate-900 hover:text-white p-1.5 rounded-full border border-slate-200 shadow-sm transition z-20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Indikator Titik */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {popularProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all ${currentSlide === idx ? "w-4 bg-orange-500" : "w-1 bg-slate-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pembatas Visual */}
        <div className="border-t border-slate-200/60 pt-2" />

        {/* FILTER KATEGORI */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
          {["Semua", "Makanan", "Minuman"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-1.5 rounded-lg transition-all font-medium whitespace-nowrap snap-align-start border ${
                filter === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-500 border-slate-200 hover:bg-slate-100/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MAIN GRID SECTION */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <ShoppingBag className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-slate-400 text-xs">Menu tidak ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square bg-neutral-100 overflow-hidden relative border-b border-slate-100">
                    {p.salesCount >= 200 && (
                      <span className="absolute top-2 left-2 bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase z-10">
                        Best Seller
                      </span>
                    )}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-3 space-y-1">
                    <div className="flex justify-between items-start gap-1">
                      <h3 className="font-heading font-medium text-xs md:text-sm text-slate-900 line-clamp-2 min-h-[32px] md:min-h-[40px]">
                        {p.name}
                      </h3>
                      <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-[10px] md:text-[11px] font-bold">
                          {p.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 pt-0 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
                  <span className="text-xs md:text-sm font-semibold text-orange-500 whitespace-nowrap">
                    Rp {p.price.toLocaleString("id-ID")}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(p);
                      showToast(`${p.name} siap menemani rehatmu!`);
                    }}
                    className="bg-slate-900 text-white text-[10px] md:text-xs font-medium px-2.5 py-1.5 rounded-lg hover:bg-orange-500 transition-all text-center shrink-0 active:scale-95"
                  >
                    + Pesan
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER TETAP ADA DI SINI */}
      <Footer />
    </div>
  );
}
