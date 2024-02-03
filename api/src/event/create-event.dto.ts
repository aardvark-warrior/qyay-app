import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventDTO {
    @IsString()
    @IsNotEmpty({ message: "Event name cannot be empty"})
    name: string;

    @IsString()
    description: string;
}