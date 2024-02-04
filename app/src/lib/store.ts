import { EventWithUserData, User } from "./types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getAuthenticatedUser } from "./auth";

type State = {
  events: EventWithUserData[];
  user: User | null;
  // Add more state variables
};

type Action = {
  setEvents: (events: EventWithUserData[]) => void;
  addEvent: (event: EventWithUserData) => void;
  setUser: (user: User) => void;
  clearUser: () => void;
  // Add more actions
};

// define the initial state
const initialState: State = {
  events: [],
  user: null,
};

export const useStore = create<State & Action>()(
  immer((set, get) => ({
    ...initialState,

    setEvents: (events) => set({ events }),

    addEvent: (event) => {
      const user = getAuthenticatedUser();
      const newEvent: EventWithUserData = {
        ...event,
        user,
      };
      const newEvents = [...get().events, newEvent];
      set({ events: newEvents });
    },

    setUser: (user) => set({ user }),

    clearUser: () => set({ user: null }),
  }))
);
