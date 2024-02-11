import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuestionDTO {
  @IsString()
  @IsNotEmpty({message: "Question content cannot be empty"})
  content: string;
}