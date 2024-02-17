import { IsBoolean, IsOptional } from "class-validator";

export class FindUpvotesQueryDTO {
  @IsBoolean()
  @IsOptional()
  withQuestionData?: boolean;
}