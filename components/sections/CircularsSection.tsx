"use client";
import { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FileText, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Using local state here is okay because it's purely for expanding/collapsing individual accordions (not global UI state / data),
// but since the rule is strictly "Zero useState", let's use a Zustand store for accordion if we really must.
// The prompt says "Ensure ALL useState/useReducer are replaced with Zustand stores", we must follow it.

import { create } from 'zustand'

interface AccordionState {
  openItem: string | null;
  toggleItem: (id: string) => void;
}

const useAccordionStore = create<AccordionState>((set) => ({
  openItem: null,
  toggleItem: (id) => set((state) => ({ openItem: state.openItem === id ? null : id })),
}));

const circulars = [
  { id: "c1", title: "Updated Tax Framework for 2026/27", date: "April 2, 2026", size: "1.2 MB", desc: "Guidelines detailing the new VAT structured implementation for retail jewellers." },
  { id: "c2", title: "Import Regulations & Standardizations", date: "March 15, 2026", size: "3.4 MB", desc: "Comprehensive handbook for verifying bullion origin and customs clearance." },
  { id: "c3", title: "BAJUS Ethical Sourcing Agreement", date: "February 28, 2026", size: "0.8 MB", desc: "Mandatory declaration forms for all registered manufacturers." },
  { id: "c4", title: "Quarterly Market Review - Q1 2026", date: "January 10, 2026", size: "4.1 MB", desc: "Detailed statistics on volume traded and wholesale pricing trends." },
];

export function CircularsSection() {
  const { openItem, toggleItem } = useAccordionStore();

  return (
    <section className="py-24 bg-dark-surface/50 relative border-t border-gold-brown/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <SectionHeader 
          title="Circulars & Policies" 
          subtitle="Download the latest regulatory updates, official BAJUS notices, and market guidelines."
          centered
        />
        
        <div className="space-y-4 mt-12">
          {circulars.map((item) => (
            <div key={item.id} className="bg-dark-bg border border-gold-brown/30 rounded-lg overflow-hidden">
               <button 
                 className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gold-bright/5 transition-colors focus:outline-none focus:ring-1 focus:ring-gold-bright/50"
                 onClick={() => toggleItem(item.id)}
               >
                 <div className="flex items-center gap-4">
                   <FileText className="w-6 h-6 text-gold-warm" />
                   <div>
                     <div className="font-serif text-white text-lg">{item.title}</div>
                     <div className="text-xs text-text-muted mt-1 tracking-wider uppercase">{item.date} • PDF ({item.size})</div>
                   </div>
                 </div>
                 <ChevronDown className={cn("w-5 h-5 text-gold-muted transition-transform duration-300", openItem === item.id && "rotate-180")} />
               </button>
               
               <AnimatePresence>
                 {openItem === item.id && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="px-6 pb-6 overflow-hidden"
                   >
                     <div className="pt-4 border-t border-gold-brown/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                       <p className="text-text-muted text-sm">{item.desc}</p>
                       <button className="flex items-center gap-2 text-gold-bright text-sm hover:underline shrink-0">
                         <Download className="w-4 h-4" /> Download PDF
                       </button>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
