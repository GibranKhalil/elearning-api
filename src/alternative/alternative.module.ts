import { Module } from '@nestjs/common';
import { AlternativeService } from './service/alternative.service';
import { AlternativeController } from './controller/alternative.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [AlternativeController],
  providers: [AlternativeService, MongoClientConfig],
})
export class AlternativeModule {}
