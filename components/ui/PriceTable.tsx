"use client";
import { useGoldPriceStore } from "@/store/useGoldPriceStore";

export function PriceTable() {
  const { prices, lastUpdated } = useGoldPriceStore();

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gold-brown/30 text-gold-muted text-sm uppercase tracking-wider">
              <th className="py-4 px-4 font-medium">Karat</th>
              <th className="py-4 px-4 font-medium text-right">Price/Gram (BDT)</th>
              <th className="py-4 px-4 font-medium text-right">Change</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, idx) => (
              <tr key={idx} className="border-b border-gold-brown/10 hover:bg-gold-bright/5 transition-colors">
                <td className="py-4 px-4 font-serif text-gold-light text-lg">{item.karat}</td>
                <td className="py-4 px-4 text-right font-medium text-text-primary">
                  {item.pricePerGram.toLocaleString()} ৳
                </td>
                <td className={`py-4 px-4 text-right text-sm ${item.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {item.change >= 0 ? "+" : ""}{item.change} ({item.changePercent}%)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-text-muted text-right">
        Rates exclude 5% VAT and making charges. Last updated: {new Date(lastUpdated).toLocaleDateString()}
      </div>
    </div>
  );
}
