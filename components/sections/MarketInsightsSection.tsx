import { useMarketStore } from "@/store/useMarketStore";
import AnimateSection from "../ui/AnimateSection";
import { ChartWrapper } from "../ui/ChartWrapper";
import { SectionHeader } from "../ui/SectionHeader";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users } from "lucide-react";
import { GoldCard } from "../ui/GoldCard";
import { priceHistoryMock } from '@/lib/mockData'


export function MarketInsightsSection() {
  const { activeTab, setActiveTab } = useMarketStore();

  const tabs = [
    { id: "monitoring", label: "Market Monitoring", icon: BarChart3 },
    { id: "predictions", label: "Predictions", icon: TrendingUp },
    { id: "experts", label: "Expert Views", icon: Users },
  ] as const;

  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Market Insights"
          subtitle="Comprehensive analytics, short-term forecasts, and exclusive commentary from industry veterans to guide your business decisions."
          centered
        />

        <AnimateSection direction="fade" className="flex justify-center mb-12">
          <div className="inline-flex bg-dark-surface p-1 rounded-lg border border-gold-brown/30">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-gold-warm to-gold-bright text-dark-bg shadow-md"
                      : "text-text-muted hover:text-gold-light"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </AnimateSection>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-[400px]"
        >
          {activeTab === "monitoring" && (
            <div className="grid lg:grid-cols-3 gap-8">
              <AnimateSection direction="up" delay={0.2} className="lg:col-span-2">
                <div className="bg-dark-surface p-6 rounded-xl border border-gold-brown/20 h-[400px]">
                  <h3 className="text-xl font-serif text-gold-light mb-6">Supply vs Demand Trends</h3>
                  <ChartWrapper height="100%">
                    <AreaChart data={priceHistoryMock} margin={{ top: 5, right: 0, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D4AF6A" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#D4AF6A" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2a221b" vertical={false} />
                      <XAxis dataKey="date" stroke="#8B7D6B" fontSize={12} tickFormatter={(val) => val.split("-")[2]} />
                      <YAxis stroke="#8B7D6B" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1510', borderColor: '#B59D86' }} />
                      <Area type="monotone" dataKey="demand" stroke="#D4AF6A" fillOpacity={1} fill="url(#colorDemand)" />
                    </AreaChart>
                  </ChartWrapper>
                </div>
              </AnimateSection>

              <StaggerContainer className="flex flex-col gap-6">
                {[1, 2].map((i) => (
                  <StaggerItem key={i}>
                    <GoldCard className="p-6">
                      <h4 className="text-text-muted text-sm uppercase tracking-wider mb-2">Key Metric {i}</h4>
                      <div className="text-3xl font-serif text-gold-bright mb-2">+{15 * i}%</div>
                      <p className="text-sm text-gold-warm">Increase in regional bullion imports compared to Q{i} last year.</p>
                    </GoldCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}

          {activeTab === "predictions" && (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <StaggerItem key={i}>
                  <GoldCard className="p-6">
                    <div className="w-10 h-10 rounded-full bg-gold-warm/20 flex items-center justify-center text-gold-bright mb-4">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Q{i} Forecast</h4>
                    <p className="text-text-muted text-sm">Expected price consolidation around 11,500 BDT mark with slight upward mobility.</p>
                  </GoldCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {activeTab === "experts" && (
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <StaggerItem key={i}>
                  <GoldCard className="p-8 relative">
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-dark-bg border border-gold-bright/30 flex items-center justify-center overflow-hidden">
                      <span className="text-gold-light text-xl font-serif">EX</span>
                    </div>
                    <h4 className="text-xl font-serif text-white mb-1">Dr. Tariq Rahman</h4>
                    <div className="text-xs text-gold-warm mb-6 uppercase tracking-widest">Global Commodities Analyst</div>
                    <p className="text-text-muted italic leading-relaxed">
                      "The shift towards formalized trading norms in South Asia, specifically spearheaded by BAJUS, establishes a structural floor for domestic gold premiums, rendering the upcoming quarter extremely bullish."
                    </p>
                  </GoldCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </motion.div>
      </div>
    </section>
  );
}
