import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Event } from "./event.entity";
import { CreateEventDTO } from "./create-event.dto";
import { UpdateEventDTO } from "./update-event.dto";

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  // Create
  async create(createEventDto: CreateEventDTO, userId: number): Promise<Event> {
    const event = await this.eventRepository.create({
      ...createEventDto,
      userId,
    });
    return this.eventRepository.save(event);
  }

  // Read
  async findOne(id: string): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  async findAll(
    limit: number,
    offset: number,
    search?: string,
    userId?: number,
    withUserData?: boolean,
  ): Promise<Event[]> {
    const queryBuilder = this.eventRepository.createQueryBuilder("events");

    if (withUserData) {
      queryBuilder.leftJoinAndSelect("events.user", "user");
    }

    let hasWhereCondition = false;

    if (search !== undefined) {
      queryBuilder.where("events.name ILIKE :search", {
        search: `%${search}%`,
      });
      hasWhereCondition = true;
    }

    if (userId !== undefined) {
      if (hasWhereCondition) {
        queryBuilder.andWhere("events.userId = :userId", { userId });
      } else {
        queryBuilder.where("events.userId = :userId", { userId });
        hasWhereCondition = true;
      }
    }

    queryBuilder.limit(limit);
    queryBuilder.offset(offset);

    queryBuilder.orderBy("events.startTime", "ASC");

    return queryBuilder.getMany();
  }

  // Update
  async update(
    id: string,
    updateEventDto: UpdateEventDTO,
  ): Promise<Event | null> {
    const event = await this.eventRepository.preload({ id, ...updateEventDto });
    if (!event) {
      return null;
    }
    return this.eventRepository.save(event);
  }

  // Delete
  async remove(id: string): Promise<Event | null> {
    const event = await this.findOne(id);
    if (!event) {
      return null;
    }
    return this.eventRepository.remove(event);
  }
}
