import { users, events } from "@/lib/data";
import type { User, Event } from "@/lib/data";

// Mock database
const db = {
  users: [...users],
  events: [...events]
};

export type EventWithUserData = Event & { user?: User };

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
