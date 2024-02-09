import { Event, EventWithUserData } from "./types";
// import { log } from "./logger";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  events: EventWithUserData[];
  // Add more state variables
};

type Action = {
  setEvents: (events: EventWithUserData[]) => void;
  removeEvent: (id: string) => void;
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

    removeEvent: (id) => {
      // log.debug("Store's delete event is called with id =", id);
      // log.debug("# events before delete", get().events.length);
      const newEvents = get().events.filter((event) => event.id !== id);
      // log.debug("# events after delete", newEvents.length);
      set({ events: newEvents });
    },

    addEvent: (event) => {
      const newEventWithUserData: EventWithUserData = {
        ...event,
        // TODO: replace Mock user
        user: {
          id: 1,
          username: "user-1",
        }
      };
      const newEvents = {...get().events, newEventWithUserData};
      set({ events: newEvents });
    },
  }))
);
