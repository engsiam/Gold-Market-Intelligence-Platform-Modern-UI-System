import { create } from 'zustand'

interface ThemeState {
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  scrolled: false,
  setScrolled: (scrolled) => set({ scrolled })
}));
