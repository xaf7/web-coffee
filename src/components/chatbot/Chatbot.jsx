import React, { useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo, saya asisten virtual Anda. Ada yang bisa dibantu hari ini?",
    },
  ]);

  const handlePrompt = (prompt, action) => {
    setMessages((prev) => [...prev, { sender: "user", text: prompt }]);
    setTimeout(() => {
      if (action === "nav_product") {
        setPage("products");
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Mengalihkan Anda ke halaman katalog menu premium kami...",
          },
        ]);
      } else if (action === "promo") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: 'Gunakan kode promo "PREMIUMVIBES" untuk diskon 15% di pemesanan pertama!',
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Tentu, layanan ini telah disimulasikan secara real-time.",
          },
        ]);
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="bg-white border border-slate-100 shadow-2xl rounded-2xl w-80 h-96 mb-4 flex flex-col overflow-hidden"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-heading font-medium text-sm">
                  Concierge Assistant
                </h4>
                <p className="text-[10px] text-slate-300">Siap melayani 24/7</p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-2.5 rounded-xl max-w-[80%] ${m.sender === "user" ? "bg-accent text-white rounded-br-none" : "bg-slate-100 text-primary rounded-bl-none"}`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-1.5">
              <button
                onClick={() =>
                  handlePrompt("Cari Produk Premium", "nav_product")
                }
                className="bg-white border text-[11px] px-2 py-1 rounded-md text-secondary hover:border-accent flex items-center gap-0.5"
              >
                Cari Menu <ArrowUpRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => handlePrompt("Lihat Promo Berlaku", "promo")}
                className="bg-white border text-[11px] px-2 py-1 rounded-md text-secondary hover:border-accent flex items-center gap-0.5"
              >
                Cek Promo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent text-white p-3.5 rounded-full shadow-lg hover:bg-orange-600 transition-transform active:scale-95 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
