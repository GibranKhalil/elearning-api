import { LessonType } from 'src/@types/Enum/lesson.enum';

export class LessonEntity {
  constructor(
    private readonly id: string,
    private name: string,
    private type: LessonType,
    private linkedQuestions: string[],
  ) {}
}
