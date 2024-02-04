export type Event = {
  id: string;
  userId: number;
  name: string;
  description?: string;
}

export type User = {
  id: number;
  username: string;
}

export type EventWithUserData = Event & { user?: User };