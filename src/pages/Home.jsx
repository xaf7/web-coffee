import React, { useState, useRef } from "react";
import { useStore } from "../store/useStore";
import { motion } from "framer-motion";

// Import Footer
import Footer from "../components/layout/Footer";

import {
  ArrowRight,
  Star,
  Coffee,
  Heart,
  Play,
  Pause,
  Volume2,
  ArrowUpRight,
} from "lucide-react";

export default function Home({ setPage }) {
  const { products, addToCart, showToast } = useStore();
  const featured = products.slice(0, 4);

  // State untuk Audio Player
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio play diblokir browser:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Data Testimoni Kolaborasi Korporat / B2B
  const corporateTestimonials = [
    {
      id: 1,
      quote:
        "Integrasi Ekosistem Digital Nouvelle x blu memudahkan Gen-Z & Millennials membeli kopi lewat pembayaran digital untuk menemani kegiatan sehari-hari sambil menikmati berbagai promo yang tersedia! Terbukti, transaksi selalu tinggi karena Nouvelle selalu di hati! ❤️",
      partner: "blu by BCA Digital",
      tag: "Digital Ecosystem Partner",
    },
    {
      id: 2,
      quote:
        "Kami sangat mengapresiasi inisiatif dari Nouvelle Coffee untuk berkolaborasi bersama dalam kampanye ini. Semoga kolaborasi kami dengan Nouvelle Coffee bisa menginspirasi banyak pihak terutama dalam melakukan kampanye kebaikan.",
      partner: "Kitabisa.com",
      tag: "Social Impact Collaboration",
    },
    {
      id: 3,
      quote:
        "Nouvelle Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Projex, etc. The team was really helpful, organized, and had a fast response to coordinate everything.",
      partner: "GoFood Indonesia",
      tag: "Strategic Merchant Partner",
    },
  ];

  return (
    <div className="space-y-16 pb-20 bg-neutral-50/50 flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-neutral-100/70 min-h-[85vh] flex items-center px-6 md:px-16 overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-3xl space-y-6 z-10 py-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase font-bold tracking-[0.25em] text-accent flex items-center gap-2"
          >
            <Coffee className="w-3.5 h-3.5" /> Time out for your soul
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-semibold text-primary leading-[1.15]"
          >
            Lelah dan Pusing? <br />
            <span className="text-primary">Mari Rehat Sejenak.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed"
          >
            Sebab healing terbaik bukan selalu tentang pergi jauh, melainkan
            mengistirahatkan raga dan menenangkan pikiran. Temukan kedamaian
            kecilmu dalam kehangatan cangkir Nouvelle hari ini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => setPage("products")}
              className="bg-primary text-white text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-accent transition shadow-lg shadow-slate-950/10 flex items-center gap-2"
            >
              Cari Menu Rehatmu <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Pembatas Visual */}
      <div className="flex items-center justify-center max-w-xl mx-auto px-6 opacity-30">
        <div className="h-[1px] bg-slate-400 flex-grow"></div>
        <Coffee className="w-4 h-4 mx-3 text-slate-500" />
        <div className="h-[1px] bg-slate-400 flex-grow"></div>
      </div>

      {/* 2. Section Kutipan Rehat */}
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-5 md:p-8 shadow-sm">
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-inner relative group bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1515536765-9b2a70c4b333?auto=format&fit=crop&w=800&q=80"
              alt="Rehat Pikiran dan Raga"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="space-y-6 p-2 md:p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-accent">
              <Heart className="w-5 h-5 fill-current opacity-80" />
              <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400">
                Jeda Pikiran & Raga
              </span>
            </div>

            {/* TYPO "layu" SUDAH DIHAPUS DI SINI */}
            <blockquote className="font-heading text-xl md:text-2xl text-primary font-medium leading-relaxed italic">
              "Healing sejati tidak melulu soal pelarian dari kenyataan. Hari
              ini mungkin bukan tentang melupakan, tapi belajar mengikhlaskan
              supaya endingnya gak meyesakan."
            </blockquote>

            <div className="h-[1px] w-16 bg-slate-200" />

            <div className="bg-neutral-50 border border-slate-200 p-4 rounded-2xl flex items-center justify-between shadow-sm max-w-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition transform active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>
                <div>
                  <p className="text-xs font-semibold text-primary">
                    Nadi Tenang
                  </p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Volume2 className="w-3 h-3 text-accent" /> Ambient Lo-Fi
                    Rehat
                  </p>
                </div>
              </div>

              <audio ref={audioRef} src="Lesung pipi.mp3" loop />

              {isPlaying && (
                <div className="flex items-end gap-0.5 h-4 px-2">
                  <span className="w-0.5 bg-accent animate-pulse h-3"></span>
                  <span className="w-0.5 bg-accent animate-pulse h-4 delay-75"></span>
                  <span className="w-0.5 bg-accent animate-pulse h-2 delay-150"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pembatas Visual */}
      <div className="flex items-center justify-center max-w-xl mx-auto px-6 opacity-30">
        <div className="h-[1px] bg-slate-400 flex-grow"></div>
        <Star className="w-4 h-4 mx-3 text-slate-500" />
        <div className="h-[1px] bg-slate-400 flex-grow"></div>
      </div>

      {/* 3. Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary">
            Menu Pilihan Penawar Penat
          </h2>
          <p className="text-xs text-slate-400">
            Paling digemari untuk mengembalikan energi dan fokusmu.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square bg-neutral-100 overflow-hidden relative border-b border-neutral-100">
                  {p.isBestSeller && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase z-10">
                      Best Seller
                    </span>
                  )}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-3 md:p-4 space-y-1">
                  <div className="flex justify-between items-start gap-1">
                    <h3 className="font-heading font-medium text-xs md:text-sm text-primary line-clamp-2">
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

              <div className="p-3 md:p-4 pt-0 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
                <span className="text-xs md:text-sm font-semibold text-accent whitespace-nowrap">
                  Rp {p.price.toLocaleString("id-ID")}
                </span>
                <button
                  onClick={() => {
                    addToCart(p);
                    showToast(`${p.name} siap menemani rehatmu!`);
                  }}
                  className="bg-primary text-white text-[10px] md:text-xs font-medium px-2.5 py-1.5 rounded-lg hover:bg-accent transition text-center shrink-0"
                >
                  + Pesan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => setPage("products")}
            className="bg-red-600 text-white text-xs font-semibold px-8 py-3 rounded-xl hover:bg-red-700 transition shadow-md active:scale-95 duration-200 tracking-wide"
          >
            Lihat Semua Menu
          </button>
        </div>
      </section>

      {/* 4. Section Our Story */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-4 left-6 right-6 text-slate-100 font-heading font-bold text-5xl md:text-7xl select-none pointer-events-none opacity-40 uppercase tracking-widest hidden md:block whitespace-nowrap">
            our story our story our story
          </div>

          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xs relative z-10 bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
              alt="Suasana Kedai Kopi"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-teal-800">
              Our Story
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
              <p>
                Didirikan pada tahun 2018,{" "}
                <strong className="text-teal-800">Nouvelle Coffee</strong>{" "}
                adalah startup kopi yang bercita-cita membuat kopi spesial
                terbaik untuk pelanggan. Seperti nama kami yang diambil dari
                semangat pembaruan, kami ingin tumbuh cepat, kuat, tinggi, dan
                menciptakan kehidupan baru di sekitar. Kami ingin kehadiran kami
                bisa meningkatkan kualitas kopi dalam komunitas kita.
              </p>
              <p>
                Dengan jaringan dan pengalaman, kami menggunakan teknologi
                terkini untuk alat dan biji kopi kami. Diambil langsung dari
                petani pilihan, biji kopi berkualitas tinggi diproses dan
                dipanggang sempurna oleh kami, dan diajarkan kepada barista
                kompeten kami dengan semangat untuk menyajikan satu cangkir
                kebahagiaan hanya untuk kamu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-0 top-10 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />

        <div className="space-y-10 relative z-10">
          <div className="text-center space-y-2">
            <div className="inline-block px-4 py-1 border border-dashed border-accent/60 bg-accent/5 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">
              Kolaborasi Sukses Kami
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary tracking-tight">
              Testimoni Mitra Strategis
            </h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Kepercayaan dari berbagai brand besar membuktikan komitmen
              Nouvelle dalam menyajikan kualitas terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-accent/40 group"
              >
                <div className="space-y-3">
                  <span className="text-accent font-serif text-3xl block leading-none h-2">
                    “
                  </span>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-xs text-primary group-hover:text-accent transition-colors">
                      {item.partner}
                    </h4>
                    <p className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                      {item.tag}
                    </p>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-lg text-slate-400 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Komponen Utama */}
      <Footer />
    </div>
  );
}
