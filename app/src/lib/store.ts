import { EventWithUserData, Question, User } from "./types";
// import { log } from "./logger";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  events: EventWithUserData[];
  user: User | null;
  questions: Question[];
  selectedEventId: string | null;
  // Add more state variables
};

type Action = {
  // Event
  setEvents: (events: EventWithUserData[]) => void;
  removeEvent: (id: string) => void;
  addEvent: (event: EventWithUserData) => void;
  // User
  setUser: (user: User) => void;
  clearUser: () => void;
  // Question
  setQuestions: (questions: Question[]) => void;
  addQuestion: (question: Question) => void;
  clearQuestions: () => void;
  setSelectedEventId: (id: string) => void;
  clearSelectedEventId: () => void;
  // Add more actions
};

// define the initial state
const initialState: State = {
  events: [],
  user: null,
  questions: [],
  selectedEventId: null,
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

    clearUser: () => set({ user: null }),

    setQuestions: (questions) => set({ questions }),

    addQuestion: (question) => {
      set({ questions: [question, ...get().questions] });
    },

    clearQuestions: () => set({ questions: [] }),

    setSelectedEventId: (id) => set({ selectedEventId: id }),

    clearSelectedEventId: () => set({ selectedEventId: null }),
  })),
);
