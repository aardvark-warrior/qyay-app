import { nanoid } from "nanoid";
import type { User, Event, EventWithUserData } from "@/lib/types";
import { getAuthenticatedUser, getAuthenticatedUserToken, removeAuthenticatedUserToken, storeAuthenticatedUserToken } from "./auth";

const API_URL = import.meta.env.VITE_API_URL;

// Fetch all events with user data
export const fetchEvents = async (): Promise<EventWithUserData[]> => {
  const token = getAuthenticatedUserToken();
  const response = await fetch(`${API_URL}/decks?withUserData=true`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} - ${
        responseJson.message || response.statusText
      }`,
    );
  }

  return responseJson.data;

  // return new Promise((resolve) => {
  //   setTimeout(async () => {
  //     const data: EventWithUserData[] = [];
  //     for (const event of db.events) {
  //       const user = await findUser(event.userId);
  //       data.push({ ...event, user });
  //     }
  //     resolve(data);
  //   }, 200); // Simulate an API delay
  // });
};

// Create an event
export const createEvent = async (
  name: string, 
  description?: string
): Promise<Event> => {
  const user = getAuthenticatedUser();
  const token = getAuthenticatedUserToken();

  const response = await fetch(`${API_URL}/decks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, description }),
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
  //       description
  //     };
  //     db.events.push(newEvent);
  //     resolve(newEvent);
  //   }, 200); // Simulate an API delay
  // });
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

// Login, store the token, and return the user
export const login = async (
  username: string,
  password: string,
): Promise<User> => {
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} - ${
        responseJson.message || response.statusText
      }`,
    );
  }

  const { access_token } = responseJson.data;

  if (!access_token) {
    throw new Error("Authentication token is missing from the response!");
  }

  storeAuthenticatedUserToken(access_token);
  const user = getAuthenticatedUser();
  return user;
};

// Logout and clear the token
export const logout = async (): Promise<void> => {
  // You can send a request to the server to perform server-side logout
  // Here we just clear the token
  removeAuthenticatedUserToken();
};

