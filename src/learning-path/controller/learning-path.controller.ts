import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LearningPathService } from '../service/learning-path.service';
import { CreateLearningPathDto } from '../dto/create-learning-path.dto';
import { UpdateLearningPathDto } from '../dto/update-learning-path.dto';

@Controller('learning-path')
export class LearningPathController {
  constructor(private readonly learningPathService: LearningPathService) {}

  @Post()
  async create(@Body() createLearningPathDto: CreateLearningPathDto) {
    return this.learningPathService.create(createLearningPathDto);
  }

  @Get()
  async findAll() {
    return this.learningPathService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.learningPathService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLearningPathDto: UpdateLearningPathDto,
  ) {
    return this.learningPathService.update(id, updateLearningPathDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.learningPathService.remove(id);
  }
}
