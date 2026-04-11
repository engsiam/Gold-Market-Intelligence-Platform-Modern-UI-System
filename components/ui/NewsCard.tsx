"use client";
import { NewsArticle } from "@/types";
import { GoldCard } from "./GoldCard";
import { Calendar } from "lucide-react";

export function NewsCard({ data }: { data: NewsArticle }) {
  return (
    <GoldCard className="flex flex-col h-full hover:shadow-[0_4px_20px_rgba(212,175,106,0.1)] transition-all">
      <div className="h-48 bg-dark-bg border-b border-gold-brown/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent z-10" />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="text-xs uppercase tracking-wider text-dark-bg font-bold bg-gold-bright px-2 py-1 rounded">
            {data.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
          <Calendar className="w-3 h-3" />
          <span>{new Date(data.publishedAt).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span className="text-gold-warm">{data.source}</span>
        </div>
        
        <h3 className="text-lg font-serif text-text-primary mb-3 line-clamp-2 hover:text-gold-light transition-colors cursor-pointer">
          {data.title}
        </h3>
        
        <p className="text-text-muted text-sm line-clamp-3 mb-4 flex-grow">
          {data.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gold-brown/10">
          <span className="text-gold-bright text-sm hover:underline cursor-pointer">
            Read Full Article →
          </span>
        </div>
      </div>
    </GoldCard>
  );
}
