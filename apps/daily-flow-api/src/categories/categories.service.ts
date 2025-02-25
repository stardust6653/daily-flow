import { Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

// src/categories/categories.service.ts
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(userId: string, createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesRepository.create({
      ...createCategoryDto,
      user_id: userId,
    });
    return await this.categoriesRepository.save(category);
  }

  async findAllByUser(userId: string) {
    return await this.categoriesRepository.find({
      where: { user_id: userId },
      order: { order: 'ASC' },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.categoriesRepository.update(id, updateCategoryDto);
    return this.categoriesRepository.findOne({ where: { id } });
  }

  async delete(id: string) {
    await this.categoriesRepository.delete(id);
  }
}
