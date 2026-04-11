"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { ResearchCard } from "../ui/ResearchCard";
import { researchMock } from "@/lib/mockData";
import { useResearchStore } from "@/store/useResearchStore";
import { cn } from "@/lib/utils";
import { GoldButton } from "../ui/GoldButton";

export function ResearchSection() {
  const { activeFilter, setFilter } = useResearchStore();

  const filters = [
    { id: "all", label: "All Papers" },
    { id: "bangladesh", label: "Bangladesh Market" },
    { id: "global", label: "Global Trends" },
    { id: "student", label: "Student Research" },
  ] as const;

  const filteredResearch = activeFilter === "all" 
    ? researchMock 
    : researchMock.filter(r => r.category === activeFilter);

  return (
    <section id="research" className="py-24 bg-dark-surface/30 relative border-t border-gold-brown/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader 
            title="Share & Discover Gold Research" 
            subtitle="Explore our comprehensive library of academic papers, market analyses, and student thesis projects."
            className="mb-0"
          />
          <div className="flex flex-col gap-2 shrink-0 max-w-xs">
            <span className="text-xs text-gold-bright/80 font-bold uppercase tracking-wider">
              Selected student papers receive an honorarium limit up to 50,000 BDT
            </span>
            <GoldButton variant="outlined" className="bg-dark-bg" onClick={() => alert("Please sign up to submit research.")}>
              Submit Your Research
            </GoldButton>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilter(filter.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                activeFilter === filter.id
                  ? "bg-gold-warm/20 border-gold-bright text-gold-light"
                  : "border-gold-brown/30 text-text-muted hover:border-gold-bright/50"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredResearch.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ResearchCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
