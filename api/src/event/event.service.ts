import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDTO } from './create-event.dto';
import { UpdateEventDTO } from './update-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}

  // Create
  async create(createEventDto: CreateEventDTO, userId: number): Promise<Event> {
    const event = await this.eventRepository.create({
      ...createEventDto,
      userId
    });
    return this.eventRepository.save(event);
  }

  // Read
  async findOne(id: string): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  async findAll(
    limit: number,
    offset: number
  ): Promise<Event[]> {
    const queryBuilder = this.eventRepository.createQueryBuilder('events');

    queryBuilder.limit(limit);
    queryBuilder.offset(offset);

    queryBuilder.orderBy('events.startTime', 'ASC');

    return queryBuilder.getMany();
  }

  // Update
  async update(id: string, updateEventDto: UpdateEventDTO): Promise<Event | null> {
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
