"use client";
import { motion } from "framer-motion";
import { useGoldPriceStore } from "@/store/useGoldPriceStore";

export function Ticker() {
  const { prices } = useGoldPriceStore();

  if (!prices || prices.length === 0) return null;

  return (
    <div className="w-full bg-gold-bright text-dark-bg py-2 overflow-hidden flex whitespace-nowrap border-b border-dark-bg/20">
      <motion.div
        className="flex gap-12 pl-12"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Double array to create seamless loop */}
        {[...prices, ...prices].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 font-medium">
            <span className="font-bold">{item.karat}</span>
            <span>{item.pricePerGram.toLocaleString()} BDT/g</span>
            <span className={item.change >= 0 ? "text-dark-surface" : "text-red-900"}>
              {item.change >= 0 ? "▲" : "▼"}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
