import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {

    }
    
    // Create
    
    // Read
    async findONe(username: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ username });
    }

    // Update

    // Delete
}