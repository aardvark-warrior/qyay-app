import { nanoid } from "nanoid";
import { users, events } from "@/lib/data";
import type { User, Event, EventWithUserData } from "@/lib/types";
import { getAuthenticatedUser, getAuthenticatedUserToken } from "./auth";

// Mock database
const db = {
  users: [...users],
  events: [...events],
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
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);
  const response = await fetch(`${API_URL}/events?withUserData=true`);
  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} - ${
        responseJson.message || response.statusText
      }`,
    );
  }

  return responseJson.data;
};

// Create a post
export const createEvent = async (
  name: string,
  description?: string,
  startTime?: string,
): Promise<Event> => {
  const user = getAuthenticatedUser();
  const token = getAuthenticatedUserToken();

  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${API_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, description, startTime }),
  });
  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} - ${
        responseJson.message || response.statusText
      }`,
    );
  }

  return {
    ...responseJson.data,
    user: user,
  };
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     const user = getAuthenticatedUser();
  //     const newEvent: Event = {
  //       id: nanoid(),
  //       userId: user.id,
  //       name,
  //       description,
  //       startTime: startTime || new Date().toISOString(),
  //     };
  //     db.events.push(newEvent);
  //     resolve(newEvent);
  //   }, 200); // Simulate an API delay
  // });
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
