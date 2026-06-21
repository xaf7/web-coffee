/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Slate gelap untuk teks/elemen utama
        secondary: "#1E293B", // Slate sedang
        accent: "#FF7A00", // Oranye premium untuk tombol & highlight
        neutralBg: "#F8FAFC", // Abu-abu sangat muda untuk background
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
