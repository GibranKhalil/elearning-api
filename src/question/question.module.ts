import { Module } from '@nestjs/common';
import { QuestionService } from './service/question.service';
import { QuestionController } from './controller/question.controller';
import { MongoClientConfig } from 'src/config/mongoClient.config';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, MongoClientConfig],
})
export class QuestionModule {}
