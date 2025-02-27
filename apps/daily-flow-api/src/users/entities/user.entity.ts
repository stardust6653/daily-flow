import { Category } from 'src/categories/entities/category.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column({ default: false }) // 기본값 설정
  show_tutorial: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Category, (category) => category.user, { cascade: true })
  categories: Category[];

  @OneToMany(() => Task, (task) => task.user, { cascade: true })
  tasks: Task[];
}
