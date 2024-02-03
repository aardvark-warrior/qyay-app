import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "./create-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}
    
    // Create
    async createUser(userDto: CreateUserDTO): Promise<User> {
        const user = new User();
        user.username = userDto.username;
        user.password = await bcrypt.hash(userDto.password, 10);
        return this.userRepository.save(user);
    }

    // Read
    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ username });
    }

    // Update

    // Delete
}