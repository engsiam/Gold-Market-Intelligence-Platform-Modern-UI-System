import { create } from 'zustand'
import { GoldPrice } from '@/types'
import { goldPricesMock } from '@/lib/mockData'

interface GoldPriceState {
  prices: GoldPrice[]
  lastUpdated: string
  setPrices: (prices: GoldPrice[]) => void
}

export const useGoldPriceStore = create<GoldPriceState>((set) => ({
  prices: goldPricesMock,
  lastUpdated: new Date().toISOString(),
  setPrices: (prices) => set({ prices, lastUpdated: new Date().toISOString() }),
}))
