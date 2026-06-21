import React from "react";
import { useStore } from "../../store/useStore";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast() {
  const toast = useStore((state) => state.toast);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed top-20 right-6 z-50 bg-primary text-white text-xs px-4 py-3 rounded-lg shadow-xl border border-slate-800 flex items-center gap-3"
        >
          <div className="bg-accent/20 p-1.5 rounded-md">
            <Bell className="w-4 h-4 text-accent" />
          </div>
          <span className="font-medium">{toast}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
