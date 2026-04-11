"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { GoldCard } from "../ui/GoldCard";
import { membersMock } from "@/lib/mockData";
import { useMemberStore } from "@/store/useMemberStore";
import { cn } from "@/lib/utils";
import { GoldButton } from "../ui/GoldButton";
import { BadgeCheck, MapPin } from "lucide-react";

export function MembersSection() {
  const { activeFilter, setFilter } = useMemberStore();

  const categories = [
    { id: "all", label: "All Members" },
    { id: "retailer", label: "Retailers" },
    { id: "wholesaler", label: "Wholesalers" },
    { id: "manufacturer", label: "Manufacturers" },
    { id: "bullion", label: "Bullion Dealers" },
  ] as const;

  const filteredMembers = activeFilter === "all" 
    ? membersMock 
    : membersMock.filter(m => m.category === activeFilter);

  return (
    <section id="members" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="BAJUS Trusted Members" 
          subtitle="A directory of verified businesses upholding the highest standards of quality and ethics in Bangladesh's gold industry."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "px-5 py-2 text-sm font-medium transition-all relative",
                activeFilter === cat.id ? "text-gold-bright" : "text-text-muted hover:text-gold-light"
              )}
            >
              {cat.label}
              {activeFilter === cat.id && (
                <motion.div 
                  layoutId="member-active-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-bright"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GoldCard className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-xs uppercase bg-gold-brown/20 text-gold-warm px-2 py-1 rounded">
                       {member.category}
                     </span>
                     {member.verified && (
                       <BadgeCheck className="w-5 h-5 text-gold-bright drop-shadow-[0_0_8px_rgba(212,175,106,0.6)]" />
                     )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                     <MapPin className="w-4 h-4" />
                     {member.location}
                  </div>
                  <div className="text-xs text-gold-brown pt-4 border-t border-gold-brown/20">
                     Member since {member.since}
                  </div>
                </GoldCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="flex justify-center gap-6">
           <GoldButton variant="filled">View Full Directory</GoldButton>
           <GoldButton variant="outlined">Apply for Membership</GoldButton>
        </div>
      </div>
    </section>
  );
}
