import { QuestionType } from 'src/@types/Enum/question.enum';

export class QuestionEntity {
  constructor(
    private readonly id: string,
    private description: string,
    private question: string,
    private type: QuestionType,
    private linkedAlternative?: string[],
  ) {}
}
