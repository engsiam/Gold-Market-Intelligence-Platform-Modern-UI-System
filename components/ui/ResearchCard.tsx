"use client";
import { Research } from "@/types";
import { GoldCard } from "./GoldCard";
import { BookOpen } from "lucide-react";

export function ResearchCard({ data }: { data: Research }) {
  return (
    <GoldCard className="p-6 flex flex-col h-full hover:-translate-y-1 transition-transform">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs uppercase tracking-wider text-gold-warm bg-gold-warm/10 px-2 py-1 rounded">
          {data.category}
        </span>
        {data.honorium && (
          <span className="text-xs text-green-400 border border-green-400/30 px-2 py-1 rounded-full">
            Honorarium Awarded
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-serif text-gold-light mb-2 line-clamp-2">
        {data.title}
      </h3>
      
      <p className="text-text-muted text-sm line-clamp-3 mb-6 flex-grow">
        {data.abstract}
      </p>
      
      <div className="mt-auto border-t border-gold-brown/20 pt-4 flex items-center justify-between">
        <div className="text-sm">
          <div className="text-text-primary">{data.author}</div>
          <div className="text-text-muted text-xs">{data.institution}</div>
        </div>
        <button className="text-gold-bright hover:text-gold-light transition-colors p-2 cursor-pointer" aria-label="Read full paper">
          <BookOpen className="w-5 h-5" />
        </button>
      </div>
    </GoldCard>
  );
}
