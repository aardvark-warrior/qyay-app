import { Event } from "src/event/event.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  content: string;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  timestamp: Date;

  @ManyToOne(() => Event, (event) => event.questions)
  @JoinColumn({ name: "eventId" })
  event: Event;

  @Column()
  eventId: string;
}
