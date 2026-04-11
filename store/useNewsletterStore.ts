import { create } from 'zustand'

interface NewsletterState {
  email: string
  setEmail: (email: string) => void
}

export const useNewsletterStore = create<NewsletterState>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
}))
