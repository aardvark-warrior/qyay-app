import { EventWithUserData, Question, Upvote, User } from "./types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  events: EventWithUserData[];
  user: User | null;
  questions: Question[];
  upvotes: Upvote[];
  selectedEventId: string | null;
  // Add more state variables
};

type Action = {
  // Event
  setEvents: (events: EventWithUserData[]) => void;
  removeEvent: (id: string) => void;
  editEvent: (event: EventWithUserData) => void;
  addEvent: (event: EventWithUserData) => void;
  setSelectedEventId: (id: string) => void;
  clearSelectedEventId: () => void;
  // User
  setUser: (user: User) => void;
  clearUser: () => void;
  // Question
  setQuestions: (questions: Question[]) => void;
  addQuestion: (question: Question) => void;
  updateQuestion: (question: Question) => void;
  clearQuestions: () => void;
  // Upvote
  addUpvote: (upvote: Upvote) => void;
  // Add more actions
};

// define the initial state
const initialState: State = {
  events: [],
  user: null,
  questions: [],
  upvotes: [],
  selectedEventId: null,
};

export const useStore = create<State & Action>()(
  immer((set, get) => ({
    ...initialState,

    setEvents: (events) => set({ events }),

    removeEvent: (id) => {
      const newEvents = get().events.filter((event) => event.id !== id);
      set({ events: newEvents });
    },

    editEvent: (event) => {
      const idx = get().events.findIndex(
        (oldEvent) => oldEvent.id === event.id,
      );
      const eventsCpy = get().events;
      eventsCpy[idx] = event;
      set({ events: [...eventsCpy] });
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

    updateQuestion: (question) => {
      const idx = get().questions.findIndex(
        (oldQuestion) => oldQuestion.id === question.id,
      );
      const questionsCpy = [...get().questions];
      questionsCpy[idx] = question;
      set({ questions: [...questionsCpy] });
    },

    clearQuestions: () => set({ questions: [] }),

    setSelectedEventId: (id) => set({ selectedEventId: id }),

    clearSelectedEventId: () => set({ selectedEventId: null }),

    addUpvote: (upvote) => set({ upvotes: [upvote, ...get().upvotes] }),
  })),
);
