"use client";
import { useMenuStore } from "@/store/useMenuStore";
import { useModalStore } from "@/store/useModalStore";
import { AnimatePresence, motion } from "framer-motion";
import { GoldButton } from "../ui/GoldButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Market Data", href: "#market-data" },
  { name: "Research", href: "#research" },
  { name: "Members", href: "#members" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export function MobileMenu() {
  const { isOpen, closeMenu } = useMenuStore();
  const { openModal } = useModalStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-30 bg-dark-bg/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
        >
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-serif text-text-primary hover:text-gold-bright transition-colors uppercase"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          <div className="mt-12 flex justify-center">
            <GoldButton 
              variant="filled" 
              onClick={() => {
                closeMenu();
                openModal("login");
              }}
              className="w-full max-w-xs"
            >
              Member Login
            </GoldButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
