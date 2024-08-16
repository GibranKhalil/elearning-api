import { Test, TestingModule } from '@nestjs/testing';
import { AlternativeController } from './alternative.controller';
import { AlternativeService } from './alternative.service';

describe('AlternativeController', () => {
  let controller: AlternativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlternativeController],
      providers: [AlternativeService],
    }).compile();

    controller = module.get<AlternativeController>(AlternativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
