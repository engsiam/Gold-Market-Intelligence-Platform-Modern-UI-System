import AnimateSection from "../ui/AnimateSection";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";
import { SectionHeader } from "../ui/SectionHeader";
import { GoldButton } from "../ui/GoldButton";
import { newsMock } from "@/lib/mockData";
import { NewsCard } from "../ui/NewsCard";

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader 
            title="News & Forecasts" 
            className="mb-0"
          />
          <AnimateSection direction="right" delay={0.2}>
            <GoldButton variant="ghost" className="shrink-0">
              View All News →
            </GoldButton>
          </AnimateSection>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main featured news */}
          <AnimateSection direction="left" className="md:col-span-2">
            <NewsCard data={newsMock[0]} />
          </AnimateSection>
          
          <div className="flex flex-col gap-8">
            <AnimateSection direction="right" delay={0.1}>
              <h3 className="text-xl font-serif text-gold-light border-b border-gold-brown/20 pb-4">BAJUS in the News</h3>
            </AnimateSection>
            
            <StaggerContainer className="space-y-6">
              {newsMock.slice(1, 4).map((news) => (
                <StaggerItem key={news.id}>
                  <div className="group cursor-pointer">
                    <div className="text-xs text-gold-bright mb-1">{new Date(news.publishedAt).toLocaleDateString()}</div>
                    <h4 className="text-text-primary group-hover:text-gold-light transition-colors line-clamp-2 leading-tight">
                      {news.title}
                    </h4>
                    <div className="text-text-muted text-xs mt-2">{news.source}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <AnimateSection direction="right" delay={0.4}>
              <div className="mt-auto">
                 <button className="text-gold-bright text-sm font-medium hover:underline">More Press Mentions</button>
              </div>
            </AnimateSection>
          </div>
        </div>
      </div>
    </section>
  );
}
