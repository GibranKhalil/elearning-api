import { Module } from '@nestjs/common';
import { AlternativeService } from './alternative.service';
import { AlternativeController } from './alternative.controller';

@Module({
  controllers: [AlternativeController],
  providers: [AlternativeService],
})
export class AlternativeModule {}
