import { EventWithUserData, User } from "./types";
// import { log } from "./logger";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  events: EventWithUserData[];
  user: User | null;
  // Add more state variables
};

type Action = {
  setEvents: (events: EventWithUserData[]) => void;
  removeEvent: (id: string) => void;
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

    removeEvent: (id) => {
      // log.debug("Store's delete event is called with id =", id);
      // log.debug("# events before delete", get().events.length);
      const newEvents = get().events.filter((event) => event.id !== id);
      // log.debug("# events after delete", newEvents.length);
      set({ events: newEvents });
    },

    addEvent: (event) => {
      set({ events: [...get().events, event] });
    },

    setUser: (user) => set({ user }),

    clearUser: () => set({ user: null}),
  })),
);
