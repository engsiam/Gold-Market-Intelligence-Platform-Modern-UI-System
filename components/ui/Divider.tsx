"use client";
import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center w-full py-8", className)}>
      <div className="h-px bg-gradient-to-r from-transparent via-gold-brown/50 to-transparent w-full max-w-sm" />
      <div className="w-2 h-2 rotate-45 border border-gold-bright mx-4 shrink-0" />
      <div className="h-px bg-gradient-to-r from-gold-brown/50 via-gold-brown/50 to-transparent w-full max-w-sm" />
    </div>
  );
}
