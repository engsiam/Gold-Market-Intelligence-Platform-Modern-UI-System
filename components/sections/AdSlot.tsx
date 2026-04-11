"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  className?: string;
}

export function AdSlot({ className }: AdSlotProps) {
  return (
    <div className={cn("w-full py-8 flex justify-center", className)}>
      <div className="w-full max-w-4xl h-24 md:h-32 bg-dark-surface border border-gold-brown/30 relative overflow-hidden group flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <span className="text-gold-brown/50 text-xs uppercase tracking-widest absolute top-2 right-2">Advertisement</span>
        <div className="text-gold-muted/40 font-serif text-xl md:text-2xl flex items-center gap-4">
          <span className="w-12 h-px bg-gold-brown/30"></span>
          BAJUS Premium Partner Space
          <span className="w-12 h-px bg-gold-brown/30"></span>
        </div>
      </div>
    </div>
  );
}
