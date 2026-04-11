"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { NewsCard } from "../ui/NewsCard";
import { newsMock } from "@/lib/mockData";
import { GoldButton } from "../ui/GoldButton";

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader 
            title="News & Forecasts" 
            className="mb-0"
          />
          <GoldButton variant="ghost" className="shrink-0">
            View All News →
          </GoldButton>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main featured news */}
          <div className="md:col-span-2">
            <NewsCard data={newsMock[0]} />
          </div>
          
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-serif text-gold-light border-b border-gold-brown/20 pb-4">BAJUS in the News</h3>
            
            <div className="space-y-6">
              {newsMock.slice(1, 4).map((news) => (
                <div key={news.id} className="group cursor-pointer">
                  <div className="text-xs text-gold-bright mb-1">{new Date(news.publishedAt).toLocaleDateString()}</div>
                  <h4 className="text-text-primary group-hover:text-gold-light transition-colors line-clamp-2 leading-tight">
                    {news.title}
                  </h4>
                  <div className="text-text-muted text-xs mt-2">{news.source}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
               <button className="text-gold-bright text-sm font-medium hover:underline">More Press Mentions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
