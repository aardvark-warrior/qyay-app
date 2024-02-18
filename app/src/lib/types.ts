export type Event = {
  id: string;
  userId: number;
  questionCount: number;
  name: string;
  description?: string;
  startTime: string;
};

export type Question = {
  id: string;
  content: string;
  timestamp: string;
  upvoteCount: number;
  isAnswered: boolean;
};

export type User = {
  id: number;
  username: string;
  displayName: string;
};

export type Upvote = {
  id: string;
  timestamp: string;
  // TODO: uniquely associate like with anon user
};

export type EventWithUserData = Event & { user?: User };
