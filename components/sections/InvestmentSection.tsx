"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { StatCard } from "../ui/StatCard";
import { ShieldCheck, TrendingUp, Globe, BadgeDollarSign } from "lucide-react";
import { ChartWrapper } from "../ui/ChartWrapper";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { priceHistoryMock } from "@/lib/mockData";

export function InvestmentSection() {
  return (
    <section className="py-24 bg-dark-surface/50 border-y border-gold-brown/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Why Invest in Gold?" 
          subtitle="Gold remains a cornerstone of economic stability and personal wealth preservation. Explore the numbers that define the strength of the bullion market."
          centered
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mt-12">
          <StatCard label="Demand Growth" value={18} suffix="%" />
          <StatCard label="Import Volume" value={42} suffix="T" />
          <StatCard label="Global Reserves" value={35} prefix="$" suffix="B" />
          <StatCard label="5-Yr Price Growth" value={84} suffix="%" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-dark-bg p-8 md:p-12 rounded-xl border border-gold-brown/20 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-[radial-gradient(circle,rgba(212,175,106,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <div>
            <h3 className="text-2xl font-serif text-gold-light mb-8 flex items-center gap-3">
              <TrendingUp className="text-gold-bright w-6 h-6" /> Opportunity
            </h3>
            <ul className="space-y-6">
              {[
                 { title: "Portfolio Diversification", desc: "Gold acts as a highly effective hedge against inflation and currency fluctuations." },
                 { title: "Generational Wealth", desc: "Historical data shows consistent long-term appreciation, securing wealth for successors." },
                 { title: "Tax Incentives", desc: "Recent government policies offer simplified tax structures for registered gold importers." }
              ].map((item, idx) => (
                <li key={idx}>
                  <div className="text-lg text-white mb-1">{item.title}</div>
                  <div className="text-sm text-text-muted leading-relaxed">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif text-gold-light mb-8 flex items-center gap-3">
              <ShieldCheck className="text-gold-bright w-6 h-6" /> Strength & Market Growth
            </h3>
            
            <div className="h-[250px] mb-8">
               <ChartWrapper height="100%">
                  <BarChart data={priceHistoryMock.slice(0, 10)} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a221b" vertical={false} />
                    <XAxis dataKey="date" stroke="#8B7D6B" fontSize={12} tickFormatter={(val) => val.split("-")[2]} />
                    <YAxis stroke="#8B7D6B" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#1A1510', borderColor: '#B59D86' }} cursor={{fill: 'rgba(212,175,106,0.1)'}} />
                    <Bar dataKey="demand" fill="#D4AF6A" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="supply" fill="#8B7D6B" radius={[4, 4, 0, 0]} />
                  </BarChart>
               </ChartWrapper>
            </div>

            <ul className="space-y-6">
              {[
                 { title: "Intrinsic Value", desc: "As a tangible asset with limited global supply, its value cannot be diluted by institutions." },
                 { title: "High Liquidity", desc: "Instantly convertible to cash globally, making it a reliable emergency reserve." }
              ].map((item, idx) => (
                <li key={idx}>
                  <div className="text-lg text-white mb-1">{item.title}</div>
                  <div className="text-sm text-text-muted leading-relaxed">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
