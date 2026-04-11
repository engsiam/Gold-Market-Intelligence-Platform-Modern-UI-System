import { HeroSection } from "@/components/sections/HeroSection";
import { GoldPriceSection } from "@/components/sections/GoldPriceSection";
import { MarketInsightsSection } from "@/components/sections/MarketInsightsSection";
import { IndustryLeadersSection } from "@/components/sections/IndustryLeadersSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { MembersSection } from "@/components/sections/MembersSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CSRSection } from "@/components/sections/CSRSection";
import { CircularsSection } from "@/components/sections/CircularsSection";
import { MemberPaymentSection } from "@/components/sections/MemberPaymentSection";
import { HelpdeskSection } from "@/components/sections/HelpdeskSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { AdSlot } from "@/components/sections/AdSlot";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <AdSlot className="mt-8 mb-4 border-none" />
      
      <GoldPriceSection />
      <MarketInsightsSection />
      
      <Divider />
      
      <IndustryLeadersSection />
      <ResearchSection />
      
      <AdSlot className="my-12" />
      
      <NewsSection />
      <InvestmentSection />
      <MembersSection />
      
      <Divider />
      
      <EventsSection />
      <CSRSection />
      <CircularsSection />
      
      <MemberPaymentSection />
      <HelpdeskSection />
      
      <AdSlot className="mt-12 mb-8 bg-transparent border-none" />
      
      <SocialSection />
    </main>
  );
}
