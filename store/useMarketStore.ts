import { create } from 'zustand'

interface MarketState {
  activeTab: 'monitoring' | 'predictions' | 'experts'
  setActiveTab: (tab: 'monitoring' | 'predictions' | 'experts') => void
}

export const useMarketStore = create<MarketState>((set) => ({
  activeTab: 'monitoring',
  setActiveTab: (activeTab) => set({ activeTab }),
}))
