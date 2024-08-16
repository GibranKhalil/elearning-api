import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LearningPathModule } from './learning-path/learning-path.module';
import { AlternativeModule } from './alternative/alternative.module';
import { SectionModule } from './section/section.module';
import { QuestionModule } from './question/question.module';
import { TagModule } from './tag/tag.module';
import { LessonModule } from './lesson/lesson.module';
import { CourseModule } from './course/course.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CourseModule,
    LessonModule,
    TagModule,
    QuestionModule,
    SectionModule,
    AlternativeModule,
    LearningPathModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
