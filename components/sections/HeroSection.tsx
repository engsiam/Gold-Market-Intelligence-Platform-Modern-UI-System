"use client";
import { motion } from "framer-motion";
import { GoldButton } from "../ui/GoldButton";
import { useGoldPriceStore } from "@/store/useGoldPriceStore";

export function HeroSection() {
  const { prices } = useGoldPriceStore();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Particle/Bokeh effects mock via CSS/Gradients */}
      <div className="absolute inset-0 bg-dark-bg z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,106,0.15)_0%,rgba(15,11,7,1)_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-warm/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-bright/10 rounded-full blur-[120px]" />
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-bright"></div>
          <span className="text-gold-bright uppercase tracking-[0.2em] text-sm font-semibold">Established 1984</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-bright"></div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bangladesh's Premier <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-bright to-gold-warm">
            Gold Industry Authority
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering bullion traders, jewellers, investors & craftsmen across Bangladesh with transparency, policy advocacy, and market intelligence.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GoldButton variant="filled" className="px-8 py-4 text-lg">
            Explore Market Data
          </GoldButton>
          <GoldButton variant="outlined" className="px-8 py-4 text-lg bg-dark-bg/50 backdrop-blur-sm">
            Become a Member
          </GoldButton>
        </motion.div>

        {/* Hero Price Counters */}
        <motion.div 
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {prices.slice(0, 4).map((item, idx) => (
            <div key={idx} className="bg-dark-surface/80 backdrop-blur-md border border-gold-brown/30 rounded-lg p-5 flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform">
              <span className="text-gold-warm text-xs uppercase tracking-wider mb-2">{item.karat} Gold</span>
              <span className="text-2xl font-serif text-gold-light">{item.pricePerGram.toLocaleString()} ৳</span>
              <span className={`text-xs mt-1 ${item.change >= 0 ? "text-green-400/80" : "text-red-400/80"}`}>
                {item.change >= 0 ? "▲" : "▼"} {item.change} BDT
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
