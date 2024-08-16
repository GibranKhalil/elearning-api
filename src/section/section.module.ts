import { Module } from '@nestjs/common';
import { SectionService } from './service/section.service';
import { SectionController } from './controller/section.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [SectionController],
  providers: [SectionService, MongoClientConfig],
})
export class SectionModule {}
