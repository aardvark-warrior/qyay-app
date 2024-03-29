import { Event } from "src/event/event.entity";
import { Question } from "src/question/question.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  displayName: string;

  @OneToMany(() => Event, (event) => event.user)
  events: Event[];
}
