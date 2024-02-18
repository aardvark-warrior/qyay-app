import { Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Question } from "./question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDTO } from "./create-question.dto";
import { EventService } from "src/event/event.service";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    private readonly eventService: EventService,
  ) {}

  // Returns all questions that match the given criteria.
  async findAll(
    limit: number,
    offset: number,
    eventId?: string,
    search?: string,
    withEventData?: boolean,
  ): Promise<Question[]> {
    const content = search ? ILike(`%${search}%`) : undefined;
    const relations = [];

    if (withEventData) {
      relations.push("event");
    }

    const questions = await this.questionRepository.find({
      take: limit,
      skip: offset,
      where: [
        {
          eventId,
          content,
        },
      ],
      order: {
        timestamp: "DESC",
      },
      relations,
    });

    return questions;
  }

  // Find a question by id
  async findOne(id: string): Promise<Question | null> {
    return await this.questionRepository.findOne({where: { id }});
  }

  // Creates a new instance of the Question entity and saves it to the database.
  // Returns the newly created question.
  async create(
    createQuestionDto: CreateQuestionDTO,
    eventId: string,
  ): Promise<Question> {
    const question = this.questionRepository.create({
      ...createQuestionDto,
      eventId, // Associate the question with an event
    });

    // Increment the question counter in the associated event
    await this.eventService.incrementQuestionCounter(eventId);

    return this.questionRepository.save(question);
  }

  // Increment upvoteCount when question is upvoted. Called by UpvoteService
  async incrementUpvoteCounter(id: string): Promise<Question | null> {
    const question = await this.findOne(id);
    if (!question) {
      return null;
    }
    question.upvoteCount += 1;
    await this.questionRepository.save(question);
    return question;
  }

  async updateQuestion(id: string): Promise<Question | null> {
    const question = await this.findOne(id);
    if (!question) {
      return null;
    }
    question.isAnswered = !question.isAnswered;
    await this.questionRepository.save(question);
    return question;
  }
}
