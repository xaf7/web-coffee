import React, { useState } from "react";
import { useStore } from "../../store/useStore";
import {
  ShoppingBag,
  LogOut,
  Coffee,
  X,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

export default function Navbar({ setPage, currentPage }) {
  const { cart, user, logout, updateQty, removeFromCart, showToast } =
    useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center transition-all">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage("home")}
        >
          <Coffee className="text-accent w-6 h-6" />
          <span className="font-heading font-bold text-xl tracking-tight text-primary">
            NOUVELLE.
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-secondary">
          <button
            onClick={() => setPage("home")}
            className={`hover:text-accent transition ${currentPage === "home" ? "text-accent" : ""}`}
          >
            Beranda
          </button>
          <button
            onClick={() => setPage("products")}
            className={`hover:text-accent transition ${currentPage === "products" ? "text-accent" : ""}`}
          >
            Produk
          </button>
        </div>

        <div className="flex items-center gap-5">
          {/* Tombol Keranjang Interaktif */}
          <div
            className="relative cursor-pointer p-1"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 text-primary hover:text-accent transition" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                {totalItems}
              </span>
            )}
          </div>

          {user ? (
            <div className="flex items-center gap-3 border-l pl-4 border-slate-200">
              <span className="text-xs font-medium text-secondary hidden sm:inline">
                {user.name}
              </span>
              <button
                onClick={() => {
                  logout();
                  setPage("home");
                }}
                className="text-slate-400 hover:text-rose-600 transition"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setPage("login")}
              className="flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-secondary transition shadow-sm"
            >
              Masuk
            </button>
          )}
        </div>
      </nav>

      {/* Slide-over Sidebar Keranjang Belanja */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Gelap */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slide-in">
              {/* Header Sidebar */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-heading font-semibold text-primary flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-accent" /> Keranjang
                  Belanja
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-50 text-slate-400 hover:text-primary transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Daftar Item di Keranjang */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 select-none">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="bg-slate-50 p-4 rounded-full text-slate-300">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-slate-400">
                      Keranjang Anda masih kosong
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-slate-50/60 p-3 rounded-xl border border-slate-100/80"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-white shadow-xs"
                      />
                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div>
                          <h4 className="text-xs font-heading font-medium text-primary line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-xs font-semibold text-accent mt-0.5">
                            Rp {item.price.toLocaleString("id-ID")}
                          </p>
                        </div>

                        {/* FITUR EDIT & HAPUS */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-slate-200 bg-white rounded-md">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="p-1 text-slate-400 hover:text-primary transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-semibold text-slate-700">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="p-1 text-slate-400 hover:text-primary transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => {
                              removeFromCart(item.id);
                              showToast(`${item.name} dihapus.`);
                            }}
                            className="text-slate-300 hover:text-rose-600 transition p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Ringkasan Subtotal & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">
                      Subtotal Estimasi
                    </span>
                    <span className="font-heading font-semibold text-primary text-base">
                      Rp {totalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      showToast("Menuju sistem pembayaran aman...");
                    }}
                    className="w-full bg-primary text-white text-xs font-semibold py-3 rounded-xl hover:bg-accent transition shadow-md shadow-slate-900/5 text-center block"
                  >
                    Lanjutkan ke Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
