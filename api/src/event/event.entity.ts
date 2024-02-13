import { User } from "src/user/user.entity";
import { Question } from "src/question/question.entity";
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
export class Event {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn({
    nullable: true,
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  startTime: Date;

  @Column({ default: 0 })
  questionCount: number;

  @ManyToOne(
    () => User,
    (user) => {
      user.events;
    },
  )
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  userId: number;

  @OneToMany(() => Question, (question) => question.event)
  questions: Question[];
}
