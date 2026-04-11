"use client";
import { IndustryLeader } from "@/types";
import { GoldCard } from "./GoldCard";
import { Quote } from "lucide-react";

import Image from "next/image";

export function LeaderCard({ data }: { data: IndustryLeader }) {
  return (
    <GoldCard className="p-8 relative">
      <Quote className="w-12 h-12 text-gold-brown/20 absolute top-6 left-6" />
      <div className="relative z-10">
        <p className="text-lg text-gold-light italic mb-8 mt-4 leading-relaxed">
          "{data.quote}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold-brown/30 border border-gold-bright/30 flex items-center justify-center overflow-hidden relative">
            {data.imageUrl ? (
              <Image src={data.imageUrl} alt={data.name} fill sizes="48px" className="object-cover" />
            ) : (
              <span className="text-gold-bright font-serif text-xl">{data.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <div className="font-bold text-text-primary">{data.name}</div>
            <div className="text-xs text-gold-warm">{data.title}, {data.organization}</div>
          </div>
        </div>
      </div>
    </GoldCard>
  );
}
