// src/task-status/entities/task-status.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Task } from 'src/tasks/entities/task.entity';

@Entity()
export class TaskStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category_id: string;

  @Column()
  label: string;

  @Column()
  color: string;

  @Column()
  sub_color: string;

  @ManyToOne(() => Category, (category) => category.taskStatuses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Task, (task) => task.status, { cascade: true })
  tasks: Task[];
}
