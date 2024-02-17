import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Upvote } from './upvote.entity';
import { Repository } from 'typeorm';
import { QuestionService } from 'src/question/question.service';

@Injectable()
export class UpvoteService {
  constructor(
    @InjectRepository(Upvote)
    private readonly upvoteRepository: Repository<Upvote>,
    private readonly questionService: QuestionService,
  ) {}

  // CRUD Operations
  async findAll(
    questionId?: string,
  ): Promise<Upvote[]> {
    const upvotes = await this.upvoteRepository.find({
      where: { questionId },
    });

    return upvotes;
  }

  async create(questionId: string): Promise<Upvote> {
    const upvote = this.upvoteRepository.create({ questionId });
    await this.questionService.incrementUpvoteCounter(questionId);
    return this.upvoteRepository.save(upvote);
  }
}
