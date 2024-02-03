import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "./create-user.dto";
import { UserResponseDTO } from "./user-reponse.dto";
import { UserService } from "./user.service";

@Controller('users')    // endpoint name
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async createUser(
    @Body()
    userDto: CreateUserDTO,
  ): Promise<UserResponseDTO> {
    const user = await this.userService.createUser(userDto);
    
    delete user.password;
    return user;
    // Alternatively
    // const { password, ...userOutput } = user;
    // return userOutput;
  }
}
