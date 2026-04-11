"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useMenuStore } from "@/store/useMenuStore";
import { useModalStore } from "@/store/useModalStore";
import { useThemeStore } from "@/store/useThemeStore";
import { GoldButton } from "../ui/GoldButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Market Data", href: "#market-data" },
  { name: "Research", href: "#research" },
  { name: "Members", href: "#members" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrolled, setScrolled } = useThemeStore();
  const { toggleMenu, isOpen } = useMenuStore();
  const { openModal } = useModalStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed z-40 transition-all duration-300 border-b border-transparent left-0 right-0 w-full",
        scrolled
          ? "bg-dark-bg/95 backdrop-blur-md border-gold-brown/20 py-4 shadow-xl top-0"
          : "bg-transparent py-6 top-[41px]"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Animation */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold-bright to-gold-deep rounded-sm flex items-center justify-center">
              <span className="text-dark-bg font-serif font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-serif text-white tracking-widest font-bold">
              BAJUS
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="relative text-sm text-text-primary font-medium tracking-wide uppercase"
              >
                {link.name}

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold-bright transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <GoldButton
                variant="outlined"
                onClick={() => openModal("login")}
                className="py-2 px-5 text-xs"
              >
                Member Login
              </GoldButton>
            </motion.div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary hover:text-gold-bright transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}