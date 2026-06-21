import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Chatbot from "./components/chatbot/Chatbot";
import Toast from "./components/ui/Toast";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { Coffee, X, Sparkles } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
  const [showWelcome, setShowWelcome] = useState(false);

  // Trigger Pop-up hanya saat pertama kali web dimuat
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedNouvelle");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeWelcomeModal = () => {
    setShowWelcome(false);
    localStorage.setItem("hasVisitedNouvelle", "true");
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent/20 flex flex-col justify-between relative">
      <div>
        <Navbar setPage={setPage} currentPage={page} />
        <Toast />

        {/* Router Kontekstual */}
        <main>
          {page === "home" && <Home setPage={setPage} />}
          {page === "products" && <Products />}
          {page === "login" && <Login setPage={setPage} />}
          {page === "admin" && <Admin />}
        </main>
      </div>

      {/* Pop-up Selamat Datang Tema Kopi */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={closeWelcomeModal}
          />

          {/* Kartu Pop-up */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center relative z-10 animate-fade-in-up">
            <button
              onClick={closeWelcomeModal}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-50 text-slate-400 hover:text-primary transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mx-auto bg-amber-50 text-accent w-16 h-16 rounded-full flex items-center justify-center mb-4 relative shadow-xs">
              <Coffee className="w-8 h-8 animate-bounce-slow" />
              <Sparkles className="w-4 h-4 absolute top-2 right-2 text-amber-400 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">
                Selamat Datang di Nouvelle
              </span>
              <h3 className="text-xl font-heading font-semibold text-primary">
                Aroma Kopi Terbaik Sudah Menantimu! ☕
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed px-2">
                Seduh kebahagiaanmu hari ini. Jelajahi pilihan biji kopi artisan
                dan menu premium racikan barista terbaik kami.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  closeWelcomeModal();
                  setPage("products");
                }}
                className="w-full bg-primary text-white text-xs font-semibold py-3 rounded-xl hover:bg-accent transition shadow-md shadow-slate-900/5 block text-center"
              >
                Mulai Jelajahi Menu
              </button>
              <button
                onClick={closeWelcomeModal}
                className="w-full text-slate-400 hover:text-primary text-[11px] font-medium mt-3 transition"
              >
                Nanti Saja
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Widget */}
      <Chatbot setPage={setPage} />

      {/* FOOTER BAWAAN SEBELUMNYA DI SINI SUDAH DIHAPUS */}
    </div>
  );
}
