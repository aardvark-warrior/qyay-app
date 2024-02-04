import { EventWithUserData } from "./types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  events: EventWithUserData[];
  // Add more state variables
};

type Action = {
  setEvents: (events: EventWithUserData[]) => void;
  addEvent: (event: Event) => void;
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

    addEvent: (event) => {
      const newEvent: EventWithUserData = {
        ...event,
        user: {
          id: 1, 
          username:"edsger"
        },
      };
      const newEvents = [...get().events, newEvent];
      set({ events: newEvents });
    },
  }))
);
