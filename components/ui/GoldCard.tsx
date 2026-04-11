"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GoldCardProps extends HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
}

export function GoldCard({ className, children, glowOnHover = true, ...props }: GoldCardProps & { ref?: any }) {
  return (
    <div
      ref={props.ref}
      className={cn(
        "bg-dark-surface border border-gold-brown/30 rounded-xl overflow-hidden transition-all duration-300",
        glowOnHover && "hover:border-gold-bright/60 hover:shadow-[0_0_15px_rgba(212,175,106,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
