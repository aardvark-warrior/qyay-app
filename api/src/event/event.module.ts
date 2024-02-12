import { Module } from "@nestjs/common";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "./event.entity";
import { UserService } from "src/user/user.service";
import { User } from "src/user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Event, User])],
  controllers: [EventController],
  providers: [EventService, UserService],
})
export class EventModule {}
