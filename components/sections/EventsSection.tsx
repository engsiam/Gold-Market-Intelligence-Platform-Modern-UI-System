"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { upcomingEventsMock } from "@/lib/mockData";
import { CalendarDays, MapPin } from "lucide-react";

export function EventsSection() {
  return (
    <section className="py-24 bg-dark-surface border-t border-gold-brown/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Events & Fairs" 
          subtitle="Be part of our national exhibitions, workshops, and international summits."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {upcomingEventsMock.map((event, i) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-bg p-6 rounded-xl border border-gold-brown/30 hover:border-gold-bright transition-colors group cursor-pointer"
            >
               <h4 className="text-lg font-bold text-white mb-4 group-hover:text-gold-light transition-colors">{event.title}</h4>
               <div className="space-y-2 text-sm text-text-muted">
                 <div className="flex items-center gap-2">
                   <CalendarDays className="w-4 h-4 text-gold-warm" />
                   {event.date}
                 </div>
                 <div className="flex items-center gap-2">
                   <MapPin className="w-4 h-4 text-gold-warm" />
                   {event.location}
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
