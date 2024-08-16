import { Module } from '@nestjs/common';
import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [CourseController],
  providers: [CourseService, MongoClientConfig],
})
export class CourseModule {}
