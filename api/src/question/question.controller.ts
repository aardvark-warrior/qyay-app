import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { QuestionResponseDTO } from "./question-reponse.dto";
import { CreateQuestionDTO } from "./create-question.dto";
import { FindQuestionsQueryDTO } from "./find-questions-query.dto";
import { FindQuestionsResponseDTO } from "./find-questions-response.dto";

@Controller("events/:eventId/questions")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async findAll(
    @Param("eventId") eventId: string,
    @Query() query: FindQuestionsQueryDTO,
  ): Promise<FindQuestionsResponseDTO> {
    const { limit, offset, search, withEventData } = query;

    const questions = await this.questionService.findAll(
      limit,
      offset,
      eventId,
      search,
      withEventData,
    );

    return {
      limit,
      offset,
      search,
      withEventData,
      data: questions,
    };
  }

  @Post()
  async create(
    @Body() createQuestionDto: CreateQuestionDTO,
    @Param("eventId") eventId: string,
  ): Promise<QuestionResponseDTO> {
    return await this.questionService.create(createQuestionDto, eventId);
  }
}
