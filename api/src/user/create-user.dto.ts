import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @MinLength(3, { message: "Username is too short"})
    @MaxLength(12, { message: "Username is too long"})
    username: string;

    @IsString()
    @MinLength(8, { message: "Password is too short"})
    password: string;
}