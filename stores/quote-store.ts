import { create } from 'zustand'

interface QuoteStore {
  isOpen: boolean
  selectedService?: string
  openQuoteModal: (service?: string) => void
  closeQuoteModal: () => void
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  isOpen: false,
  selectedService: undefined,
  openQuoteModal: (service) => set({ isOpen: true, selectedService: service }),
  closeQuoteModal: () => set({ isOpen: false, selectedService: undefined }),
}))
