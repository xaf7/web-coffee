import React, { useState } from "react";
import { useStore } from "../store/useStore";
import { Plus, Trash2, Package, Layers, Users, BarChart3 } from "lucide-react";

export default function Admin() {
  const { products, addProduct, deleteProduct, showToast } = useStore();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Makanan");

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    addProduct({
      name,
      price: Number(price),
      category,
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    });
    setName("");
    setPrice("");
    showToast("Produk baru berhasil ditambahkan ke Database!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-primary">
          Executive Management Panel
        </h1>
        <p className="text-xs text-slate-400">
          Kelola dan pantau seluruh operasional visual toko premium Anda
        </p>
      </div>

      {/* Ringkasan Analitik Dashboard Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">
              Total Menu Item
            </p>
            <h3 className="text-xl font-bold text-primary mt-1">
              {products.length} Items
            </h3>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg text-primary">
            <Package className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">Transaksi Mock</p>
            <h3 className="text-xl font-bold text-emerald-600 mt-1">
              Rp 4.250.000
            </h3>
          </div>
          <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
            <BarChart3 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Form CRUD Tambah Produk & Tabel Kontrol */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <form
          onSubmit={handleCreate}
          className="bg-white border border-slate-100 p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="font-heading font-semibold text-sm border-b pb-2 text-primary">
            Tambah Menu Baru
          </h2>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-slate-400">
              Nama Menu
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Premium Matcha Latte"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-accent"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-slate-400">
              Harga (Rp)
            </label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Harga produk"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-accent"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-slate-400">
              Kategori
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-accent"
            >
              <option value="Makanan">Makanan</option>
              <option value="Minuman">Minuman</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-accent transition flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" /> Tambah ke Menu
          </button>
        </form>

        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="font-heading font-semibold text-sm text-primary">
              Daftar Inventaris Menu Toko
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-400 uppercase font-bold text-[10px] border-b border-slate-100">
                  <th className="p-4">Nama Produk</th>
                  <th className="p-4">Kategori</th>
                  <th className="p-4">Harga</th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="p-4 font-medium text-primary">{p.name}</td>
                    <td className="p-4 text-slate-500">{p.category}</td>
                    <td className="p-4 font-semibold text-slate-700">
                      Rp {p.price.toLocaleString("id-ID")}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          deleteProduct(p.id);
                          showToast("Produk berhasil dihapus!");
                        }}
                        className="text-slate-400 hover:text-rose-600 transition p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
