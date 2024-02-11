import type { User, Event, EventWithUserData } from "@/lib/types";
import { getAuthenticatedUser, getAuthenticatedUserToken, storeAuthenticatedUserToken } from "./auth";

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
};

// Delete event by id
export const deleteEvent = async (id: string): Promise<void> => {
  const token = getAuthenticatedUserToken();
  
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "DELETE",
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
};

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