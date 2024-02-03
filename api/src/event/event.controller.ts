import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './create-event.dto';
import { EventResponseDTO } from './event-response.dto';
import { UpdateEventDTO } from './update-event.dto';

@Controller('events')
export class EventController {
  constructor(
    private eventService: EventService
  ) {}
  
  @Get()
  async findAll(): Promise<EventResponseDTO[]> {
    const events = await this.eventService.findAll();
    return events.map((event) => {
      delete event.userId;
      return event;
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventResponseDTO> {
    const event = await this.eventService.findOne(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    delete event.userId;
    return event;
  }

  @Post()
  async createEvent(@Body() eventDto: CreateEventDTO): Promise<EventResponseDTO> {
    const userId = 1; // TODO: get userId from JWT Token
    const event = await this.eventService.createEvent(eventDto, userId);
    delete event.userId;
    return event;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDTO,
  ): Promise<EventResponseDTO> {
    const event = await this.eventService.update(id, updateEventDto);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    delete event.userId;
    return event;
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<{ statusCode: number; message: string }> {
    const event = await this.eventService.remove(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return {
      statusCode: 200,
      message: 'Event deleted successfully',
    };
  }
}
