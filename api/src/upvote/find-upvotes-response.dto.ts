import { UpvoteResponseDTO } from "./upvote-response.dto";

export class FindUpvotesReponseDTO {
  withQuestionData?: boolean;
  data: UpvoteResponseDTO[];
}