import { Test, TestingModule } from '@nestjs/testing';
import { LearningPathController } from '../learning-path.controller';
import { LearningPathService } from '../service/learning-path.service';

describe('LearningPathController', () => {
  let controller: LearningPathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningPathController],
      providers: [LearningPathService],
    }).compile();

    controller = module.get<LearningPathController>(LearningPathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
