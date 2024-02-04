import { nanoid } from "nanoid";
import { users, events } from "@/lib/data";
import type { User, Event, EventWithUserData } from "@/lib/types";
import { getAuthenticatedUser } from "./auth";

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
      const data: EventWithUserData[] = [];
      for (const event of db.events) {
        const user = await findUser(event.userId);
        data.push({ ...event, user });
      }
      resolve(data);
    }, 200); // Simulate an API delay
  });
};

// Create an event
export const createEvent = async (name: string, description?: string): Promise<Event> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = getAuthenticatedUser();
      const newEvent: Event = { 
        id: nanoid(), 
        userId: user.id,
        name, 
        description
      };
      db.events.push(newEvent);
      resolve(newEvent);
    }, 200); // Simulate an API delay
  });
};


// // Delete event by id
// export const deleteEvent = async (id: string): Promise<void> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       db.events = db.events.filter((event) => event.id !== id);
//       resolve();
//     }, 200); // Simulate an API delay
//   });
// };

