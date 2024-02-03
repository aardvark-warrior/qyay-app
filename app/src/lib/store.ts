import { EventWithUserData } from "./types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  events: EventWithUserData[];
  // Add more state variables
};

type Action = {
  setEvents: (events: EventWithUserData[]) => void;
  removeEvent: (id: string) => void;
  // Add more actions
};

// define the initial state
const initialState: State = {
  events: [],
};

export const useStore = create<State & Action>()(
  immer((set, get) => ({
    ...initialState,

    setEvents: (events) => set({ events }),

    removeEvent: (id) => {
      const newEvents = get().events.filter((event) => event.id !== id);
      set({ events: newEvents });
    },
  }))
);
