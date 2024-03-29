import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./create-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Read
  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }

  // Create
  async createUser(createUserDto: CreateUserDTO): Promise<User> {
    const { password, ...userInfo } = createUserDto;
    const user = await this.userRepository.create({
      ...userInfo,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
    return this.userRepository.save(user);
  }

  // Update

  // Delete
}
