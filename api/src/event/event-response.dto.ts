import { UserResponseDTO } from "src/user/user-reponse.dto";

export class EventResponseDTO {
  id: string;
  name: string;
  description?: string;
  startTime?: Date;
  user?: UserResponseDTO;
}
