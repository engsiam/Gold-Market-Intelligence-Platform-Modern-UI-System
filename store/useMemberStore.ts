import { create } from 'zustand'

type MemberCategory = 'all' | 'retailer' | 'wholesaler' | 'manufacturer' | 'bullion'

interface MemberState {
  activeFilter: MemberCategory
  setFilter: (category: MemberCategory) => void
}

export const useMemberStore = create<MemberState>((set) => ({
  activeFilter: 'all',
  setFilter: (activeFilter) => set({ activeFilter }),
}))
