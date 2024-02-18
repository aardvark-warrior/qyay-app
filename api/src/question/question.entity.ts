import { Event } from "src/event/event.entity";
import { Upvote } from "src/upvote/upvote.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @Column({ default: 0 })
  upvoteCount: number;

  @Column({ default: false })
  isAnswered: boolean;

  @ManyToOne(() => Event, (event) => event.questions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "eventId" })
  event: Event;

  @Column()
  eventId: string;

  @OneToMany(() => Upvote, (upvote) => upvote.question)
  upvotes: Upvote[];
}
