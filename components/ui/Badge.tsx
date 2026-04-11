"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "soft";
  className?: string;
}

export function Badge({ children, variant = "soft", className }: BadgeProps) {
  const variants = {
    solid: "bg-gold-bright text-dark-bg",
    outline: "border border-gold-bright text-gold-light",
    soft: "bg-gold-warm/10 text-gold-warm"
  };

  return (
    <span className={cn("px-2.5 py-1 text-xs font-medium uppercase tracking-wider rounded-sm", variants[variant], className)}>
      {children}
    </span>
  );
}
