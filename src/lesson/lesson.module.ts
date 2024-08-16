import { Module } from '@nestjs/common';
import { LessonService } from './service/lesson.service';
import { LessonController } from './controller/lesson.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [LessonController],
  providers: [LessonService, MongoClientConfig],
})
export class LessonModule {}
