import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UpvoteService } from './upvote.service';
import { UpvoteResponseDTO } from './upvote-response.dto';
import { FindUpvotesQueryDTO } from './find-upvotes-query.dto';
import { FindUpvotesReponseDTO } from './find-upvotes-response.dto';

@Controller('events/:eventId/questions/:questionId/upvotes')
export class UpvoteController {
  constructor(
    private readonly upvoteService: UpvoteService
  ) {}

  @Get()
  async findAll(
    @Param("questionId") questionId: string,
    @Query() query: FindUpvotesQueryDTO,
  ): Promise<FindUpvotesReponseDTO> {
    const { withQuestionData } = query;

    const upvotes = await this.upvoteService.findAll(
      questionId,
      withQuestionData,
    );

    return {
      withQuestionData,
      data: upvotes,
    };
  }

  @Post()
  async create(
    @Param("questionId") questionId: string,
  ): Promise<UpvoteResponseDTO> {
    return this.upvoteService.create(questionId);
  }
}
