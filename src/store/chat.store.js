import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  loading: false,
  mode: "grammar",

  setMode: (mode) => set({ mode }),

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setLoading: (loading) =>
    set({
      loading,
    }),

  clearChat: () =>
    set({
      messages: [],
    }),
}));