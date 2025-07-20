import { create } from "zustand";

interface RecurrenceState {
  startDate: Date | null;
  endDate: Date | null;
  frequency: string;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setFrequency: (frequency: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  startDate: new Date(),
  endDate: null,
  frequency: "Daily",
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setFrequency: (frequency) => set({ frequency }),
}));
