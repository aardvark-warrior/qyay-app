import { Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './create-event.dto';
import { EventResponseDTO } from './event-response.dto';
import { UpdateEventDTO } from './update-event.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/user-id.decorator';
import { EventOwnershipGuard } from 'src/guards/event-owner.guard';

type EventResponseWithPagination = {
  search?: string;
  data: EventResponseDTO[];
  pagination: {
    limit: number;
    offset: number;
  };
};

@Controller('events')
export class EventController {
  constructor(
    private eventService: EventService
  ) {}

  @Get()
  async findAll(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
    @Query('search') search: string,
  ): Promise<EventResponseWithPagination> {
    const events = await this.eventService.findAll(limit, offset, search);
    return {
      search,
      pagination: {
        limit, 
        offset,
      },
      data: events.map((event) => {
        delete event.userId;
        return event;
      }),
    };
    // return events.map((event) => {
    //   delete event.userId;
    //   return event;
    // });
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

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createEventDto: CreateEventDTO,
    @UserId() userId: number,
  ): Promise<EventResponseDTO> {
    const event = await this.eventService.create(createEventDto, userId);
    delete event.userId;
    return event;
  }

  @UseGuards(JwtAuthGuard, EventOwnershipGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDTO,
  ): Promise<EventResponseDTO> {
    const event = await this.eventService.update(id, updateEventDto);
    delete event.userId;
    return event;
  }

  @UseGuards(JwtAuthGuard, EventOwnershipGuard)
  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<{ statusCode: number; message: string }> {
    await this.eventService.remove(id);
    return {
      statusCode: 200,
      message: 'Event deleted successfully',
    };
  }
}
