import React from "react";

const Footer = () => {
  return (
    /* Mengubah bg-white menjadi bg-neutral-100 agar warna latarnya berbeda dan tidak menyatu dengan atasnya */
    <footer className="w-full bg-neutral-100 border-t border-slate-200/80 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Bagian Atas: Grid Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Sisi Kiri: Nama Brand Diubah Menjadi Nouvelle */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl text-primary tracking-wide uppercase">
                Nouvelle
              </span>
            </div>
          </div>

          {/* Sisi Tengah: Customer Center */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Customer Center
            </h4>
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">📍</span>
                <span>
                  Thamrin Plaza. Jl. M.H. Thamrin Kav. 8–9 Lt. PH. Kebon Melati,
                  Tanah Abang, Kalimantan utara
                </span>
              </p>
              <p className="flex items-center gap-2">
                ✉️ xafdevstudio@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="https://wa.me/6283129195737"
                  className="hover:text-accent transition"
                >
                  0831-2919-5737
                </a>
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Pengaduan Konsumen */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Consumer Complaints Service Contact Information
            </h4>
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <p>
                Directorate General of Consumer Protection and Trade Compliance,
                Ministry of Trade of the Republic of Indonesia
              </p>
              <p className="italic text-slate-500">
                WhatsApp Ditjen PKTN:{" "}
                <a
                  href="https://wa.me/6283129195737"
                  className="text-accent font-medium hover:underline"
                >
                  0831-2919-5737
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Garis Pembatas Tipis */}
        <div className="h-[1px] bg-slate-300/60 w-full" />

        {/* Bagian Bawah: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          {/* Info Hak Cipta Diubah ke Nouvelle Coffee */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
            <span>© 2026 Nouvelle Coffee. All rights reserved</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href="#terms"
              className="hover:text-primary transition underline-offset-2 hover:underline"
            >
              Terms and Conditions
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href="#privacy"
              className="hover:text-primary transition underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* Sosial Media */}
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href="#youtube"
              className="hover:text-red-600 transition text-sm"
            >
              Youtube
            </a>
            <a
              href="#instagram"
              className="hover:text-pink-600 transition text-sm"
            >
              Instagram
            </a>
            <a
              href="#linkedin"
              className="hover:text-blue-700 transition text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
