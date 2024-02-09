import { nanoid } from "nanoid";
import { users, events } from "@/lib/data";
import type { User, Event, EventWithUserData } from "@/lib/types";

// Mock database
const db = {
  users: [...users],
  events: [...events]
};

// Helper function to find a user by ID
export const findUser = async (id: number): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = db.users.find((user) => user.id === id);
      resolve(user);
    }, 200); // Simulate an API delay
  });
};

// Fetch all events with user data
export const fetchEvents = async (): Promise<EventWithUserData[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const eventsWithUserData = await Promise.all(
        db.events.map(async (event) => {
          const user = await findUser(event.userId);
          return {...event, user};
        }),
      );
      resolve(eventsWithUserData);
    }, 200); // Simulate an API delay
  });
};

// Create a post
export const createEvent = async (name: string, description: string, startTime?:string): Promise<Event> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: replace Mock userId
      const newEvent: Event = { 
        id: nanoid(), 
        userId: 1,
        name, 
        description,
        // startTime: new Date().toISOString();
      };
      db.events.push(newEvent);
      resolve(newEvent);
    }, 200); // Simulate an API delay
  });
};


// Delete event by id
export const deleteEvent = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.events = db.events.filter((event) => event.id !== id);
      resolve();
    }, 200); // Simulate an API delay
  });
};

