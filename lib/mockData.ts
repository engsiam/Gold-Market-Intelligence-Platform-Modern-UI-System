import { GoldPrice, MarketData, Research, NewsArticle, IndustryLeader, Member } from '@/types'

export const goldPricesMock: GoldPrice[] = [
  { karat: '24K (999)', pricePerGram: 12050, change: 150, changePercent: 1.26 },
  { karat: '22K', pricePerGram: 11045, change: 130, changePercent: 1.19 },
  { karat: '21K', pricePerGram: 10543, change: 125, changePercent: 1.20 },
  { karat: '18K', pricePerGram: 9037, change: 100, changePercent: 1.12 },
  { karat: '14K', pricePerGram: 7028, change: 80, changePercent: 1.15 }
];

export const priceHistoryMock: MarketData[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return {
    date: date.toISOString().split('T')[0],
    price: 10000 + Math.random() * 1000 + (i * 20),
    demand: 300 + Math.random() * 50,
    supply: 280 + Math.random() * 60,
  };
});

export const industryLeadersMock: IndustryLeader[] = [
  { id: '1', name: 'Sayem Sobhan Anvir', title: 'President', organization: 'BAJUS', quote: 'Our mission is to establish Bangladesh as a global hub for gold craftsmanship and ethical trading.', imageUrl: '' },
  { id: '2', name: 'MA Hannan Azad', title: 'Vice President', organization: 'BAJUS', quote: 'Adopting sustainable practices will secure the future of our bullion markets.', imageUrl: '' },
  { id: '3', name: 'Enamul Haque Khan', title: 'Former President', organization: 'BAJUS', quote: 'Innovation in design and technology is the key to our expanding export capacity.', imageUrl: '' },
  { id: '4', name: 'Dewan Aminul Islam', title: 'General Secretary', organization: 'BAJUS', quote: 'We are closely working with regulatory bodies to ensure a transparent gold policy.', imageUrl: '' },
  { id: '5', name: 'Pawan Kumar Agarwala', title: 'Director', organization: 'BAJUS', quote: 'Empowering local artisans has always been the cornerstone of our strategy.', imageUrl: '' }
];

export const researchMock: Research[] = [
  { id: 'R1', title: 'Impact of Global Interest Rates on Bangladesh Gold Demand', author: 'Dr. Rafiqul Islam', institution: 'Dhaka University', category: 'bangladesh', abstract: 'An analysis of how macroeconomic factors influence local retail demand for gold jewellery.', publishedAt: '2025-10-12', honorium: false },
  { id: 'R2', title: 'Sustainable Sourcing in Modern Bullion Markets', author: 'Jane Harrison', institution: 'Global Gold Council', category: 'global', abstract: 'Exploring ethical supply chains and traceability mechanisms in the international gold trade.', publishedAt: '2025-08-20', honorium: false },
  { id: 'R3', title: 'Consumer Preferences among Gen-Z Buyers', author: 'Ayesha Rahman', institution: 'North South University', category: 'student', abstract: 'A survey-based study on the shift towards minimalist 18K gold designs among younger demographics.', publishedAt: '2025-11-05', honorium: true },
  { id: 'R4', title: 'Gold vs. Crypto: Investment Hedging in South Asia', author: 'Prof. Syed Ahmed', institution: 'BIBM', category: 'bangladesh', abstract: 'Comparative analysis of safe-haven assets during recent economic volatility.', publishedAt: '2025-09-15', honorium: false },
];

export const newsMock: NewsArticle[] = [
  { id: 'N1', title: 'BAJUS Proposes New Framework for Gold Imports', excerpt: 'The trade body has recommended sweeping changes to the existing import regulations to stabilize local supply.', category: 'policy', publishedAt: '2026-02-15', source: 'The Daily Star' },
  { id: 'N2', title: 'Global Gold Prices Reach New Peak Amidst Uncertainty', excerpt: 'International bullion markets saw significant gains today as inflation concerns continue to drive safe-haven investments.', category: 'international', publishedAt: '2026-03-22', source: 'Reuters' },
  { id: 'N3', title: 'Q3 Forecast: Domestic Demand Expected to Surge', excerpt: 'Analysts predict a 15% increase in local jewellery sales ahead of the upcoming wedding season.', category: 'forecast', publishedAt: '2026-04-01', source: 'BAJUS Market Intelligence' },
  { id: 'N4', title: 'Central Bank Reassures Markets on Reserve Strategies', excerpt: 'Bangladesh Bank officials met with BAJUS leaders to discuss long-term bullion reserve allocations.', category: 'policy', publishedAt: '2026-01-10', source: 'Financial Express' },
];

export const membersMock: Member[] = [
  { id: 'M1', name: 'Bashundhara Gold Refinery', category: 'bullion', location: 'Dhaka', verified: true, since: 2020 },
  { id: 'M2', name: 'Amin Jewellers', category: 'retailer', location: 'Chittagong', verified: true, since: 1985 },
  { id: 'M3', name: 'Venus Jewellers', category: 'retailer', location: 'Dhaka', verified: true, since: 1992 },
  { id: 'M4', name: 'Apan Jewellers', category: 'retailer', location: 'Sylhet', verified: true, since: 2005 },
  { id: 'M5', name: 'Sharmin Manufacturers', category: 'manufacturer', location: 'Narayanganj', verified: true, since: 2010 },
  { id: 'M6', name: 'Golden Wholesalers Ltd.', category: 'wholesaler', location: 'Dhaka', verified: true, since: 2015 },
];

export const upcomingEventsMock = [
  { id: 'E1', title: 'Annual BAJUS Fair 2026', date: 'Oct 15-18, 2026', location: 'ICCB, Dhaka' },
  { id: 'E2', title: 'Gold Craftsmanship Workshop', date: 'Aug 20, 2026', location: 'BAJUS HQ' },
  { id: 'E3', title: 'International Bullion Summit', date: 'Nov 10, 2026', location: 'Dubai, UAE (BAJUS Delegation)' },
  { id: 'E4', title: 'Policy Advocacy Round Table', date: 'Jul 05, 2026', location: 'Sonargaon Hotel' },
];
