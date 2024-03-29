import { QuestionResponseDTO } from "./question-reponse.dto";

export class FindQuestionsResponseDTO {
  limit: number;
  offset: number;
  search?: string;
  withEventData?: boolean;
  data: QuestionResponseDTO[];
}
