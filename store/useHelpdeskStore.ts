import { create } from 'zustand'

export type HelpdeskCategory = 'feedback' | 'complaint' | 'inquiry' | 'media'

interface HelpdeskState {
  name: string
  email: string
  category: HelpdeskCategory
  message: string
  updateField: (field: string, value: string) => void
  reset: () => void
}

export const useHelpdeskStore = create<HelpdeskState>((set) => ({
  name: '',
  email: '',
  category: 'inquiry',
  message: '',
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),
  reset: () => set({ name: '', email: '', category: 'inquiry', message: '' }),
}))
