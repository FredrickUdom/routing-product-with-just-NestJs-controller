import { Test, TestingModule } from '@nestjs/testing';
import { FragranceController } from './fragrance.controller';

describe('FragranceController', () => {
  let controller: FragranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FragranceController],
    }).compile();

    controller = module.get<FragranceController>(FragranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
