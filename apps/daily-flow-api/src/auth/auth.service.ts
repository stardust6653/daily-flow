// src/auth/auth.service.ts
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { CategoriesService } from 'src/categories/categories.service';
import { TaskStatusService } from 'src/task-status/task-status.service';
import { TasksService } from 'src/tasks/tasks.service';
import { SubTasksService } from 'src/subtasks/sub-task.service';
import { DEFAULT_CATEGORIES } from './default-data';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private categoriesService: CategoriesService,
    private taskStatusService: TaskStatusService,
    private tasksService: TasksService,
    private subTasksService: SubTasksService,
  ) {}
  async register(createUserDto: CreateUserDto) {
    // 기존 회원가입 로직
    const userExists = await this.usersService.findByEmail(createUserDto.email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    // 기본 데이터 생성
    await this.createDefaultData(user.id);

    // 토큰 발급
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  private async createDefaultData(userId: string) {
    for (const categoryData of DEFAULT_CATEGORIES) {
      // 카테고리 생성
      const category = await this.categoriesService.create(userId, {
        name: categoryData.name,
        color: categoryData.color,
        order: categoryData.order,
      });

      // 상태와 ID 맵핑을 위한 객체
      const statusMap = new Map();

      // 상태 생성
      for (const statusData of categoryData.statuses) {
        const status = await this.taskStatusService.create({
          category_id: category.id,
          ...statusData,
        });
        statusMap.set(statusData.label, status.id);
      }

      // 태스크 생성
      if (categoryData.tasks) {
        for (const taskData of categoryData.tasks) {
          const statusId = statusMap.get(taskData.statusLabel);
          if (!statusId) continue;

          const { statusLabel, subtasks, ...taskDto } = taskData;
          const task = await this.tasksService.create(userId, {
            category_id: category.id,
            status_id: statusId,
            ...taskDto,
            complete: taskData.complete || false,
            expenditure: taskData.expenditure || 0,
            period: taskData.period || '', // 빈 문자열 기본값 설정
            order: taskData.order || 0, // 기본 순서 설정
          });

          // 서브태스크 생성
          if (subtasks && subtasks.length > 0) {
            for (const subtaskData of subtasks) {
              await this.subTasksService.create({
                task_id: task.id,
                ...subtaskData,
                complete: subtaskData.complete || false,
              });
            }
          }
        }
      }
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findByEmail(loginUserDto.email);

    // 이메일 체크
    if (!user) {
      throw new UnauthorizedException({
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
        code: 'AUTH_INVALID_EMAIL',
      });
    }

    // 비밀번호 체크
    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException({
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
        code: 'AUTH_INVALID_PASSWORD',
      });
    }

    // 로그인 성공
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
