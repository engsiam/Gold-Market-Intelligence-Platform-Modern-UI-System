"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { PriceTable } from "../ui/PriceTable";
import { ChartWrapper } from "../ui/ChartWrapper";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { priceHistoryMock } from "@/lib/mockData";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

export function GoldPriceSection() {
  return (
    <section id="market-data" className="py-24 bg-dark-surface/50 border-t border-gold-brown/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader 
            title="Today's Gold Prices" 
            subtitle="Indicative retail rates provided by BAJUS for the domestic market. These benchmark prices ensure fair trade and transparency across Bangladesh."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
            <motion.div variants={sectionVariants} className="bg-dark-bg p-6 md:p-8 rounded-xl border border-gold-brown/20 shadow-2xl">
              <PriceTable />
            </motion.div>

            <motion.div variants={sectionVariants} className="bg-dark-bg p-6 md:p-8 rounded-xl border border-gold-brown/20 shadow-2xl h-full flex flex-col">
              <h3 className="text-xl font-serif text-gold-light mb-6">30-Day Price Trend (18K BDT)</h3>
              <div className="flex-grow min-h-[300px]">
                <ChartWrapper height="100%">
                    <LineChart data={priceHistoryMock} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a221b" vertical={false} />
                    <XAxis dataKey="date" stroke="#8B7D6B" fontSize={12} tickFormatter={(val) => val.split("-")[2]} />
                    <YAxis stroke="#8B7D6B" fontSize={12} domain={['auto', 'auto']} tickFormatter={(value) => `${(value/1000).toFixed(1)}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1510', borderColor: '#B59D86', color: '#F0E8D8' }} 
                      itemStyle={{ color: '#D4AF6A' }}
                    />
                    <Line type="monotone" dataKey="price" stroke="#D4AF6A" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#D4AF6A' }} />
                  </LineChart>
                </ChartWrapper>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
