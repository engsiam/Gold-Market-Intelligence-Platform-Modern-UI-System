"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { cn } from "@/lib/utils";

const partners = [
  { id: 1, name: "Federation of Bangladesh Chambers of Commerce and Industry", short: "FBCCI" },
  { id: 2, name: "Bangladesh Bank", short: "BB" },
  { id: 3, name: "Ministry of Commerce", short: "MoC" },
  { id: 4, name: "World Gold Council", short: "WGC" },
  { id: 5, name: "BIDA", short: "BIDA" },
  { id: 6, name: "Natiomal Board of Revenue", short: "NBR" },
];

export function CSRSection() {
  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="CSR & Media Presence" 
          subtitle="Committed to community welfare and recognized by top-tier media channels."
          centered
        />
        
        <div className="grid lg:grid-cols-2 gap-16 mt-12 mb-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-gold-light mb-4">Empowering the Nation</h3>
            <p className="text-text-muted leading-relaxed">
              At BAJUS, our commitment extends beyond the bullion trade. We actively invest in community development, disaster relief, and educational scholarships for the children of gold craftsmen. 
            </p>
            <p className="text-text-muted leading-relaxed">
              Through our annual CSR budget, we are proud to have supported over 50,000 families across the country during the recent floods, standing shoulder-to-shoulder with the nation.
            </p>
            <div className="pt-4 flex gap-4">
               <div className="border border-gold-brown/30 rounded p-4 text-center min-w-[120px]">
                 <div className="text-gold-bright text-3xl font-serif mb-1">50K+</div>
                 <div className="text-xs uppercase text-text-muted tracking-wider">Families Helped</div>
               </div>
               <div className="border border-gold-brown/30 rounded p-4 text-center min-w-[120px]">
                 <div className="text-gold-bright text-3xl font-serif mb-1">100+</div>
                 <div className="text-xs uppercase text-text-muted tracking-wider">Scholarships</div>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
             {partners.map(p => (
               <div key={p.id} className="bg-dark-surface border border-gold-brown/20 h-24 rounded-lg flex items-center justify-center text-center p-2 group hover:border-gold-bright/50 transition-colors cursor-pointer">
                 <span className="font-serif text-gold-warm/60 group-hover:text-gold-bright transition-colors font-bold tracking-widest">{p.short}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
