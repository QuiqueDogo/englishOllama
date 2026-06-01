import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChatStore = create(
  persist(
    (set) => ({
  messages: [],
  loading: false,

  mode: "grammar",

  setMode: (mode) =>
    set({
      mode,
    }),

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
    
    }),
    {
      name: "english-ai-storage"
    }
  )
);