import { Body, Controller, Get, Post, UnauthorizedException } from "@nestjs/common";
import { CreateUserDTO } from "./create-user.dto";
import { UserResponseDTO } from "./user-reponse.dto";
import { UserService } from "./user.service";
import { AuthService } from "src/auth/auth.service";
import { UserLoginDTO } from "./user-login.dto";

@Controller('users')    // endpoint name
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(
    @Body()
    userDto: UserLoginDTO,
  ): Promise<{access_token: string}> {
    const user = await this.authService.validateUser(
      userDto.username,
      userDto.password
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

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
