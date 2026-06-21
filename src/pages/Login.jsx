import React, { useState } from "react";
import { useStore } from "../store/useStore";
import { ShieldAlert } from "lucide-react";

export default function Login({ setPage }) {
  const login = useStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (res.success) {
      if (res.role === "admin") setPage("admin");
      else setPage("home");
    } else {
      setErr("Kredensial salah atau tidak terdaftar.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutralBg px-4">
      <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-heading font-semibold text-primary">
            Selamat Datang
          </h1>
          <p className="text-xs text-slate-400">
            Silakan login untuk mengakses fitur lengkap bisnis Anda
          </p>
        </div>

        {err && (
          <div className="bg-rose-50 border border-rose-100 text-rose-600 p-3 rounded-lg text-xs flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" /> <span>{err}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-accent transition"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-accent transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-xs hover:bg-secondary transition shadow-md shadow-slate-900/5"
          >
            Masuk Sekarang
          </button>
        </form>

        <div className="border-t border-slate-100 pt-4 text-center">
          <p className="text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg">
            💡 **Tips Presentasi Klien:** <br />
            Gunakan email: `admin@brand.com` dan sandi: `admin123` untuk
            mendemonstrasikan **Dashboard Management Admin**.
          </p>
        </div>
      </div>
    </div>
  );
}
