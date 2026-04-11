"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface GoldCardProps extends HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
}

import { forwardRef } from "react";

export const GoldCard = forwardRef<HTMLDivElement, GoldCardProps>(({ className, children, glowOnHover = true, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ cursor: 'pointer' }}
      className={cn(
        "bg-dark-surface border border-gold-brown/30 rounded-xl overflow-hidden transition-all duration-300",
        glowOnHover && "hover:border-gold-bright/60 hover:shadow-[0_0_15px_rgba(212,175,106,0.15)]",
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
});

GoldCard.displayName = "GoldCard";
