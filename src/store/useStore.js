import { create } from "zustand";

export const useStore = create((set) => ({
  // Pindahkan 40 Data Produk Premium ke sini agar dikenali global oleh semua komponen
  products: [
    // === 20 MAKANAN ===
    {
      id: 1,
      name: "Truffle Mushroom Fettuccine",
      category: "Makanan",
      price: 85000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60",
      salesCount: 150,
      stock: 15,
    },
    {
      id: 2,
      name: "Smoked Salmon Croissant",
      category: "Makanan",
      price: 55000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
      salesCount: 95,
      stock: 20,
    },
    {
      id: 3,
      name: "Arancini Mozzarella Balls",
      category: "Makanan",
      price: 42000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500&auto=format&fit=crop&q=60",
      salesCount: 80,
      stock: 12,
    },
    {
      id: 4,
      name: "Wagyu Beef Burger Premium",
      category: "Makanan",
      price: 125000,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
      salesCount: 450,
      stock: 8,
    },
    {
      id: 5,
      name: "Classic New York Cheesecake",
      category: "Makanan",
      price: 48000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=500&auto=format&fit=crop&q=60",
      salesCount: 180,
      stock: 10,
    },
    {
      id: 6,
      name: "Spicy Tuna Mentai Rice",
      category: "Makanan",
      price: 62000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
      salesCount: 290,
      stock: 10,
    },
    {
      id: 7,
      name: "Croissant Almond Royale",
      category: "Makanan",
      price: 42000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
      salesCount: 380,
      stock: 10,
    },
    {
      id: 8,
      name: "Crispy Honey Garlic Chicken",
      category: "Makanan",
      price: 55000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60",
      salesCount: 195,
      stock: 10,
    },
    {
      id: 9,
      name: "Eggs Benedict Avocado",
      category: "Makanan",
      price: 68000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60",
      salesCount: 140,
      stock: 10,
    },
    {
      id: 10,
      name: "Belgian Waffle Wild Berries",
      category: "Makanan",
      price: 50000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1562376502-6f769499c886?w=500&auto=format&fit=crop&q=60",
      salesCount: 115,
      stock: 10,
    },
    {
      id: 11,
      name: "Sourdough Toast with Burrata",
      category: "Makanan",
      price: 75000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?w=500&auto=format&fit=crop&q=60",
      salesCount: 90,
      stock: 10,
    },
    {
      id: 12,
      name: "Creamy Carbonara Pasta",
      category: "Makanan",
      price: 78000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&auto=format&fit=crop&q=60",
      salesCount: 210,
      stock: 10,
    },
    {
      id: 13,
      name: "Grilled Chicken Caesar Salad",
      category: "Makanan",
      price: 58000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=60",
      salesCount: 135,
      stock: 10,
    },
    {
      id: 14,
      name: "Pain au Chocolat Maison",
      category: "Makanan",
      price: 38000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=60",
      salesCount: 260,
      stock: 10,
    },
    {
      id: 15,
      name: "Sirloin Steak with Herb Butter",
      category: "Makanan",
      price: 165000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
      salesCount: 85,
      stock: 10,
    },
    {
      id: 16,
      name: "Matcha Lava Cake Supreme",
      category: "Makanan",
      price: 45000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60",
      salesCount: 175,
      stock: 10,
    },
    {
      id: 17,
      name: "Tacos de Beef Birria",
      category: "Makanan",
      price: 65000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60",
      salesCount: 120,
      stock: 10,
    },
    {
      id: 18,
      name: "Pan-Seared Salmon Fillet",
      category: "Makanan",
      price: 138000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500&auto=format&fit=crop&q=60",
      salesCount: 105,
      stock: 10,
    },
    {
      id: 19,
      name: "Fries Platter with Truffle Mayo",
      category: "Makanan",
      price: 40000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60",
      salesCount: 340,
      stock: 10,
    },
    {
      id: 20,
      name: "Aglio Olio E Gamberi",
      category: "Makanan",
      price: 72000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60",
      salesCount: 190,
      stock: 10,
    },

    // === 20 MINUMAN ===
    {
      id: 21,
      name: "Iced Matcha Espresso Latte",
      category: "Minuman",
      price: 38000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60",
      salesCount: 320,
      stock: 10,
    },
    {
      id: 22,
      name: "Cold Brew Rose Pistachio",
      category: "Minuman",
      price: 40000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60",
      salesCount: 210,
      stock: 10,
    },
    {
      id: 23,
      name: "Earl Grey Milk Tea Crisp",
      category: "Minuman",
      price: 35000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
      salesCount: 130,
      stock: 10,
    },
    {
      id: 24,
      name: "Avocado Affogato Deluxe",
      category: "Minuman",
      price: 45000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1594911774802-8822a707cbb3?w=500&auto=format&fit=crop&q=60",
      salesCount: 75,
      stock: 10,
    },
    {
      id: 25,
      name: "Salted Caramel Cold Brew",
      category: "Minuman",
      price: 45000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60",
      salesCount: 310,
      stock: 10,
    },
    {
      id: 26,
      name: "Velvet Espresso Single Shot",
      category: "Minuman",
      price: 38000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=500&auto=format&fit=crop&q=60",
      salesCount: 240,
      stock: 10,
    },
    {
      id: 27,
      name: "Slow Juiced Golden Ginger",
      category: "Minuman",
      price: 34000,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=60",
      salesCount: 110,
      stock: 10,
    },
    {
      id: 28,
      name: "Lychee Butterfly Pea Mocktail",
      category: "Minuman",
      price: 36000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=60",
      salesCount: 185,
      stock: 10,
    },
    {
      id: 29,
      name: "Spanish Latte Creamy",
      category: "Minuman",
      price: 39000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60",
      salesCount: 295,
      stock: 10,
    },
    {
      id: 30,
      name: "Iced Sea Salt Americano",
      category: "Minuman",
      price: 32000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60",
      salesCount: 220,
      stock: 10,
    },
    {
      id: 31,
      name: "Premium Hojicha Latte",
      category: "Minuman",
      price: 38000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60",
      salesCount: 160,
      stock: 10,
    },
    {
      id: 32,
      name: "Yuzu Cold Brew Refresh",
      category: "Minuman",
      price: 42000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60",
      salesCount: 145,
      stock: 10,
    },
    {
      id: 33,
      name: "Vanilla Bean Frappuccino",
      category: "Minuman",
      price: 46000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
      salesCount: 230,
      stock: 10,
    },
    {
      id: 34,
      name: "Crimson Berry Artisan Tea",
      category: "Minuman",
      price: 34000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
      salesCount: 100,
      stock: 10,
    },
    {
      id: 35,
      name: "Iced Peach Oolong Foam",
      category: "Minuman",
      price: 36000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60",
      salesCount: 125,
      stock: 10,
    },
    {
      id: 36,
      name: "Classic Flat White",
      category: "Minuman",
      price: 35000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&auto=format&fit=crop&q=60",
      salesCount: 170,
      stock: 10,
    },
    {
      id: 37,
      name: "Dark Hot Chocolate 70%",
      category: "Minuman",
      price: 40000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60",
      salesCount: 195,
      stock: 10,
    },
    {
      id: 38,
      name: "Mango Coconut Smoothie",
      category: "Minuman",
      price: 44000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60",
      salesCount: 155,
      stock: 10,
    },
    {
      id: 39,
      name: "Iced Shaken Espresso Oat",
      category: "Minuman",
      price: 43000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60",
      salesCount: 280,
      stock: 10,
    },
    {
      id: 40,
      name: "Dirty Chai Latte Hot",
      category: "Minuman",
      price: 41000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
      salesCount: 85,
      stock: 10,
    },
  ],

  user: null,
  toast: null,
  cart: [],

  login: (email, password) => {
    if (email === "admin@nouvelle.com" && password === "admin123") {
      set({ user: { email, role: "admin", name: "Direktur Utama" } });
      return { success: true, role: "admin" };
    } else if (email && password) {
      set({ user: { email, role: "customer", name: "Pelanggan Setia" } });
      return { success: true, role: "customer" };
    }
    return { success: false };
  },
  logout: () => set({ user: null, cart: [] }),

  showToast: (message) => {
    set({ toast: message });
    setTimeout(() => set({ toast: null }), 3000);
  },

  addToCart: (product) =>
    set((state) => {
      const exist = state.cart.find((item) => item.id === product.id);
      if (exist) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }
      return { cart: [...state.cart, { ...product, qty: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  updateQty: (id, qty) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item,
      ),
    })),

  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        { ...product, id: Date.now(), rating: 5.0, stock: 10, salesCount: 0 },
      ],
    })),
  deleteProduct: (id) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
}));
