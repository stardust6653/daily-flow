// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { CategoriesModule } from 'src/categories/categories.module';
import { TaskStatusModule } from 'src/task-status/task-status.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { SubTasksModule } from 'src/subtasks/sub-task.module';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    TaskStatusModule,
    TasksModule,
    SubTasksModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRATION_TIME', '1h'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
