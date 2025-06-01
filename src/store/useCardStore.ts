import { create } from 'zustand'

export interface CardData {
  name: string
  title: string
  description: string
  links: {
    github?: string
    website?: string
    twitter?: string
    linkedin?: string
    email?: string
  }
  theme: 'terminal' | 'notion' | 'vscode' | 'web3'
}

interface CardStore {
  cardData: CardData
  setCardData: (data: Partial<CardData>) => void
  setTheme: (theme: CardData['theme']) => void
  resetCard: () => void
}

const defaultCardData: CardData = {
  name: 'haeun',
  title: 'Frontend Engineer',
  description: '감성 있는 웹 개발자 🧑‍💻\n좋은 UI/UX에 진심인 개발자입니다.',
  links: {
    github: 'https://github.com/hazzzi',
    website: 'https://hazzzi.github.io',
    email: 'hello@email.com'
  },
  theme: 'terminal'
}

export const useCardStore = create<CardStore>((set) => ({
  cardData: defaultCardData,
  setCardData: (data) =>
    set((state) => ({
      cardData: { ...state.cardData, ...data }
    })),
  setTheme: (theme) =>
    set((state) => ({
      cardData: { ...state.cardData, theme }
    })),
  resetCard: () => set({ cardData: defaultCardData })
})) 