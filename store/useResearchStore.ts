import { create } from 'zustand'

type FilterCategory = 'all' | 'bangladesh' | 'global' | 'student'

interface ResearchState {
  activeFilter: FilterCategory
  setFilter: (category: FilterCategory) => void
}

export const useResearchStore = create<ResearchState>((set) => ({
  activeFilter: 'all',
  setFilter: (activeFilter) => set({ activeFilter }),
}))
