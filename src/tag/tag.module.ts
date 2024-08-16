import { Module } from '@nestjs/common';
import { TagService } from './service/tag.service';
import { TagController } from './controller/tag.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [TagController],
  providers: [TagService, MongoClientConfig],
})
export class TagModule {}
