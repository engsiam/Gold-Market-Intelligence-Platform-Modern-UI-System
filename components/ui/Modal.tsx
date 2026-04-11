"use client";
import { useModalStore } from "@/store/useModalStore";
import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Modal() {
  const { isOpen, modalName, closeModal } = useModalStore();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-dark-surface border border-gold-brown/30 p-6 sm:p-8 rounded-xl shadow-2xl z-10"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-text-muted hover:text-gold-light transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mt-2">
              <h2 className="text-2xl font-serif text-gold-light mb-4">
                {modalName === "login" ? "Member Login" : "Notice"}
              </h2>
              {modalName === "login" && (
                <div className="space-y-4">
                  <p className="text-text-muted text-sm mb-6">
                    Access the BAJUS Member Portal to manage your profile, pay dues, and access exclusive industry data.
                  </p>
                  <input type="text" placeholder="Membership ID" className="w-full bg-dark-bg border border-gold-brown/30 rounded p-3 text-white focus:outline-none focus:border-gold-bright transition-colors" />
                  <input type="password" placeholder="Password" className="w-full bg-dark-bg border border-gold-brown/30 rounded p-3 text-white focus:outline-none focus:border-gold-bright transition-colors" />
                  <button className="w-full bg-gold-bright text-dark-bg font-bold py-3 rounded mt-4 hover:brightness-110 shadow-[0_0_15px_rgba(212,175,106,0.3)] transition-all">
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
