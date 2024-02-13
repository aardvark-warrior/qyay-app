import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./question.entity";
import { QuestionService } from "./question.service";
import { QuestionController } from "./question.controller";
import { Event } from "src/event/event.entity";
import { EventService } from "src/event/event.service";

@Module({
  imports: [TypeOrmModule.forFeature([Question, Event])],
  providers: [QuestionService, EventService],
  controllers: [QuestionController],
})
export class QuestionModule {}
