import { Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Question } from "./question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDTO } from "./create-question.dto";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
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

    return this.questionRepository.save(question);
  }
}
