
import { create } from "zustand";

export const useStudyPlanStore =
  create((set) => ({
    currentPlan: null,

    setPlan: (plan) =>
      set({
        currentPlan: plan,
      }),
  }));