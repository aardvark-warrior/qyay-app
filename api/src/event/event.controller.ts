import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDTO } from "./create-event.dto";
import { EventResponseDTO } from "./event-response.dto";
import { UpdateEventDTO } from "./update-event.dto";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { UserId } from "src/decorators/user-id.decorator";
import { EventOwnershipGuard } from "src/guards/event-owner.guard";
import { UserService } from "src/user/user.service";
import { FindEventsQueryDTO } from "./find-events-query.dto";
import { FindEventsResponseDTO } from "./find-events-response.dto";

@Controller("events")
export class EventController {
  constructor(
    private eventService: EventService,
    private userService: UserService,
  ) {}

  @Get()
  async findAll(
    @Query() query: FindEventsQueryDTO,
  ): Promise<FindEventsResponseDTO> {
    const { limit, offset, search, username, withUserData } = query;

    let userId: number | undefined;

    if (username) {
      const user = await this.userService.findOne(username);
      if (!user) {
        throw new NotFoundException(
          `User with username ${username} not found.`,
        );
      }
      userId = user.id;
    }

    const events = await this.eventService.findAll(
      limit,
      offset,
      search,
      userId,
      withUserData,
    );

    return {
      limit,
      offset,
      search,
      username,
      withUserData,
      data: events.map((event) => {
        delete event.userId;
        if (event.user) {
          delete event.user.password;
        }
        return event as EventResponseDTO;
      }),
    };
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @Query("withUserData") withUserData?: boolean,
  ): Promise<EventResponseDTO> {
    const event = await this.eventService.findOne(id, withUserData);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    delete event.userId;
    if (withUserData) {
      delete event.user.password;
    }
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
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateEventDto: UpdateEventDTO,
  ): Promise<EventResponseDTO> {
    const event = await this.eventService.update(id, updateEventDto);
    delete event.userId;
    return event;
  }

  @UseGuards(JwtAuthGuard, EventOwnershipGuard)
  @Delete(":id")
  async remove(
    @Param("id") id: string,
  ): Promise<{ statusCode: number; message: string }> {
    await this.eventService.remove(id);
    return {
      statusCode: 200,
      message: "Event deleted successfully",
    };
  }
}
