// src/subtasks/entities/subtask.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

@Entity()
export class SubTask {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task_id: string;

  @Column()
  task: string;

  @Column({ default: false })
  complete: boolean;

  @Column()
  order: number;

  @ManyToOne(() => Task, (task) => task.subtasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_id' })
  mainTask: Task;
}
