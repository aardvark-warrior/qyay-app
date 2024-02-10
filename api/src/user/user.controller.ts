import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./create-user.dto";
import { AuthService } from "src/auth/auth.service";
import { UserResponseDTO } from "./user-reponse.dto";

@Controller("users") // endpoint name
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post("register")
  async createUser(@Body() userDto: CreateUserDTO): Promise<UserResponseDTO> {
    const user = await this.userService.createUser(userDto);
    delete user.password;
    return user;
    // Alternatively
    // const { password, ...userOutput } = user;
    // return userOutput;
  }

  @Post("login")
  // prev: Promise<UserResponseDTO>
  async login(
    @Body() userDto: CreateUserDTO,
  ): Promise<{ access_token: string }> {
    const user = await this.authService.validateUser(
      userDto.username,
      userDto.password,
    );
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    // TODO prev: return user;
    return this.authService.login(user);
  }
}
