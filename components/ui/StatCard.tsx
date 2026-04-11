"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { GoldCard } from "./GoldCard";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function StatCard({ label, value, suffix = "", prefix = "", duration = 2 }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [isInView, value, duration, count]);

  return (
    <GoldCard className="p-6 text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
      >
        <div className="text-4xl md:text-5xl font-serif text-gold-bright mb-2 flex justify-center items-center gap-1">
          {prefix && <span>{prefix}</span>}
          <motion.span>{rounded}</motion.span>
          {suffix && <span>{suffix}</span>}
        </div>
        <div className="text-sm uppercase tracking-wider text-text-muted">
          {label}
        </div>
      </motion.div>
    </GoldCard>
  );
}
