import { Module } from '@nestjs/common';
import { FragranceController } from './fragrance.controller';
import { FragranceService } from './fragrance.service';

@Module({
  controllers: [FragranceController],
  providers: [FragranceService]
})
export class FragranceModule {}
