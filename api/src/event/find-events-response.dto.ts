import { EventResponseDTO } from "./event-response.dto";

export class FindEventsResponseDTO {
  limit: number;
  offset: number;
  search?: string;
  username?: string;
  withUserData?: boolean;
  data: EventResponseDTO[];
}
