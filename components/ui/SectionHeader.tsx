"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  tag?: string;
}

import AnimateSection from "./AnimateSection";

export function SectionHeader({ title, subtitle, centered = false, className, tag }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <AnimateSection direction="up" delay={0}>
        <h2 className="text-4xl md:text-5xl font-serif text-gold-light mb-4">
          {title}
        </h2>
      </AnimateSection>

      {subtitle && (
        <AnimateSection direction="up" delay={0.1}>
          <p
            className={cn(
              "text-text-muted text-lg max-w-2xl text-left",
              centered && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </AnimateSection>
      )}

      <AnimateSection direction="up" delay={0.2}>
        <div
          className={cn("h-0.5 bg-gradient-to-r from-gold-bright to-transparent mt-6", centered && "mx-auto")}
          style={{ width: "80px" }}
        />
      </AnimateSection>
    </div>
  );
}
