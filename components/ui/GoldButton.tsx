"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "ghost";
  children: ReactNode;
}

export function GoldButton({ variant = "filled", className, children, ...props }: GoldButtonProps) {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded";
  
  const variants = {
    filled: "bg-gradient-to-r from-gold-warm to-gold-bright text-dark-bg hover:brightness-110 shadow-lg",
    outlined: "border border-gold-bright text-gold-light hover:bg-gold-bright/10",
    ghost: "text-gold-light hover:text-gold-bright hover:bg-gold-bright/5"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "filled" && (
        <motion.span
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'linear', repeatDelay: 1.5 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,220,100,0.25), transparent)',
            pointerEvents: 'none',
          }}
        />
      )}
    </button>
  );
}
