export interface GoldPrice {
  karat: string
  pricePerGram: number
  change: number
  changePercent: number
}

export interface MarketData {
  date: string
  price: number
  demand: number
  supply: number
}

export interface Research {
  id: string
  title: string
  author: string
  institution: string
  category: 'bangladesh' | 'global' | 'student'
  abstract: string
  publishedAt: string
  honorium: boolean
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: 'forecast' | 'policy' | 'international'
  publishedAt: string
  source: string
}

export interface IndustryLeader {
  id: string
  name: string
  title: string
  organization: string
  quote: string
  imageUrl: string
}

export interface Member {
  id: string
  name: string
  category: 'retailer' | 'wholesaler' | 'manufacturer' | 'bullion'
  location: string
  verified: boolean
  since: number
}
