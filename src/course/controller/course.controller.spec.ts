import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from '../service/course.service';
import { CourseController } from './course.controller';

describe('CourseController', () => {
  let controller: CourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [CourseService],
    }).compile();

    controller = module.get<CourseController>(CourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
