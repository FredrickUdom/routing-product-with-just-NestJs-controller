import { Test, TestingModule } from '@nestjs/testing';
import { FragranceService } from './fragrance.service';

describe('FragranceService', () => {
  let service: FragranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FragranceService],
    }).compile();

    service = module.get<FragranceService>(FragranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
