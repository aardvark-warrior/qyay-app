export type Event = {
  id: string;
  userId: number;
  // User-entered fields
  name: string;
  description?: string;
  startTime: string;
};

export type Question = {
  id: string;
  content: string;
  timestamp: string;
}

export type User = {
  id: number;
  username: string;
  displayName: string;
};

export type EventWithUserData = Event & { user?: User };
