import { QuestionType } from 'src/@types/Enum/question.enum';
import { AlternativeEntity } from './alternative.entity';

export class QuestionEntity {
  constructor(
    private readonly id: string,
    private description: string,
    private question: string,
    private type: QuestionType,
    private alternatives: AlternativeEntity[],
  ) {}
}
