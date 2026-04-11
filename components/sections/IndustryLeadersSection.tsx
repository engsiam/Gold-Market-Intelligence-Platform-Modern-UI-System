"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { LeaderCard } from "../ui/LeaderCard";
import { industryLeadersMock } from "@/lib/mockData";
import { Play } from "lucide-react";

import Image from "next/image";

export function IndustryLeadersSection() {
  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Industry & Corporates" 
          subtitle="Hear from the leaders shaping the future of Bangladesh's gold and bullion sectors."
        />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Bytes of Industry Leaders */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {industryLeadersMock.slice(0, 2).map((leader) => (
              <LeaderCard key={leader.id} data={leader} />
            ))}
          </div>

          {/* Documentary Feature */}
          <div className="bg-dark-surface rounded-xl border border-gold-brown/20 overflow-hidden group relative flex flex-col justify-end min-h-[300px]">
            <div className="absolute inset-0 bg-dark-bg/40 z-10 group-hover:bg-dark-bg/20 transition-colors" />
            <Image src="https://images.unsplash.com/photo-1610444390666-4177b949ab13?q=80&w=600&auto=format&fit=crop" alt="Craftsman" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" />
            
            <div className="relative z-20 p-8">
              <div className="w-12 h-12 rounded-full bg-gold-bright text-dark-bg flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,175,106,0.4)]">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2 shadow-black drop-shadow-md">The Craftsman's Legacy</h3>
              <p className="text-gold-light/90 text-sm max-w-xs drop-shadow-md">
                A documentary spotlight on the generational artisans preserving Bangladesh's intricate jewelry making traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
