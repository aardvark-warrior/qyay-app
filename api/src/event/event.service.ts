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
  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findOne(id: string): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
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
