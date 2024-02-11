import { User } from "src/user/user.entity";

export class QuestionResponseDTO {
  id: string;
  content: string;
  timestamp: Date;
  eventId: string;
}
