// src/tasks/entities/task.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';
import { TaskStatus } from '../../task-status/entities/task-status.entity';
import { SubTask } from 'src/subtasks/entities/subtask.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  category_id: string;

  @Column()
  status_id: string;

  @Column()
  main_task: string;

  @Column({ nullable: true })
  memo: string;

  @Column()
  type: string;

  @Column({ default: false })
  complete: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  expenditure: number;

  @Column({ nullable: true })
  period: string;

  @Column({ default: 0 })
  order: number;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => TaskStatus, (status) => status.tasks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'status_id' })
  status: TaskStatus;

  @OneToMany(() => SubTask, (subtask) => subtask.mainTask, { cascade: true })
  subtasks: SubTask[];
}
