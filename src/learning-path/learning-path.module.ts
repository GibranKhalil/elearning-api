import { Module } from '@nestjs/common';
import { LearningPathService } from './service/learning-path.service';
import { LearningPathController } from './controller/learning-path.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [LearningPathController],
  providers: [LearningPathService, MongoClientConfig],
})
export class LearningPathModule {}
