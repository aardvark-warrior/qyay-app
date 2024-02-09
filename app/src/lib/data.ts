import { User, Event } from "./types";

export const users: User[] = [
  {
    id: 1,
    username: "edsger",
  },
  {
    id: 2,
    username: "donald",
  },
  {
    id: 3,
    username: "grace",
  },
];

export const events: Event[] = [
  {
    id: "11583298-a3f1-4d91-bd5f-2eeb77910081",
    userId: 1,
    name: "Event 1",
    description: "Welcome to Event 1!",
    // startTime: "2023-07-20T12:00:00Z",
  },
  {
    id: "daae4345-c8b8-4423-b2e3-cee407b9ce67",
    userId: 2,
    name: "Event 2",
    description: "Welcome to Event 2!",
  },
  {
    id: "d2c71716-5828-40af-baae-c6ee8212d498",
    userId: 2,
    name: "Event 3",
    description: "Welcome to Event 3!",
  },
  {
    id: "11583298-a3f1-4d91-bd5f-2eeb77910082",
    userId: 1,
    name: "Event 4",
    description: "Welcome to Event 4!",
  },
  {
    id: "daae4345-c8b8-4423-b2e3-cee407b9ce62",
    userId: 1,
    name: "Event 5",
    description: "Welcome to Event 5!",
  },
  {
    id: "d2c71716-5828-40af-baae-c6ee8212d492",
    userId: 3,
    name: "Event 6",
    description: "Welcome to Event 6!",
  }
];
