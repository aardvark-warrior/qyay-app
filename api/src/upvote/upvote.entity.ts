import { Question } from "src/question/question.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Upvote {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMPESTAMP",
  })
  timestamp: Date;

  @ManyToOne(() => Question, (question) => question.upvotes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "questionId" })
  question: Question;
  
  @Column()
  questionId: string;
}
