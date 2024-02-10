import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEventDTO {
  @IsString()
  @IsNotEmpty({ message: "Event name cannot be empty" })
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  startTime: string;
}
