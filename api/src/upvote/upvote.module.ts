import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Upvote } from "./upvote.entity";
import { UpvoteService } from "./upvote.service";
import { UpvoteController } from "./upvote.controller";
import { Question } from "src/question/question.entity";
import { QuestionService } from "src/question/question.service";
import { Event } from "src/event/event.entity";
import { EventService } from "src/event/event.service";

@Module({
  imports: [TypeOrmModule.forFeature([Upvote, Question, Event])],
  providers: [UpvoteService, QuestionService, EventService],
  controllers: [UpvoteController],
})
export class UpvoteModule {}
