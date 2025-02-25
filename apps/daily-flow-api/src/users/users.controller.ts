// src/users/users.controller.ts
import {
  Controller,
  Get,
  Put,
  Delete,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard) // 모든 엔드포인트에 인증 필요
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 현재 로그인한 사용자 정보 조회
  @Get('me')
  async getProfile(@Request() req) {
    const user = await this.usersService.findById(req.user.id);
    const { password, ...result } = user;
    return result;
  }

  // 사용자 정보 수정
  @Put('me')
  async updateProfile(@Request() req, @Body() updateData: any) {
    return this.usersService.update(req.user.id, updateData);
  }

  // 회원 탈퇴
  @Delete('me')
  async deleteAccount(@Request() req) {
    await this.usersService.delete(req.user.id);
    return { message: 'Account deleted successfully' };
  }
}
