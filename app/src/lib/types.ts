export type Event = {
  id: string;
  userId: number;
  // User-entered fields
  name: string;
  description?: string;
  startTime?: string;
};

export type User = {
  id: number;
  username: string;
};

export type EventWithUserData = Event & { user?: User };
