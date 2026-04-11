"use client";
import { useEffect } from "react";
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
    <header
      className={cn(
        "fixed z-40 transition-all duration-300 border-b border-transparent left-0 right-0 w-full",
        scrolled ? "bg-dark-bg/95 backdrop-blur-md border-gold-brown/20 py-4 shadow-xl top-0" : "bg-transparent py-6 top-[41px]"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-bright to-gold-deep rounded-sm flex items-center justify-center">
              <span className="text-dark-bg font-serif font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-serif text-white tracking-widest font-bold">BAJUS</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-primary hover:text-gold-bright transition-colors font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <GoldButton variant="outlined" onClick={() => openModal("login")} className="py-2 px-5 text-xs">
              Member Login
            </GoldButton>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary hover:text-gold-bright transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
