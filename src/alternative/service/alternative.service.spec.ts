import { Test, TestingModule } from '@nestjs/testing';
import { AlternativeService } from './alternative.service';

describe('AlternativeService', () => {
  let service: AlternativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlternativeService],
    }).compile();

    service = module.get<AlternativeService>(AlternativeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
