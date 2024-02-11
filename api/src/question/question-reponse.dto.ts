import { User } from "src/user/user.entity";

export class QuestionResponseDTO {
  id: string;
  content: string;
  timestamp: Date;
  userId: number;
  eventId: string;
  user?: User;
}
