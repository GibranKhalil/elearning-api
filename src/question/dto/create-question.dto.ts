import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { QuestionType } from 'src/@types/Enum/question.enum';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'A pergunta da questão não pode estar vazia' })
  @IsString({ message: 'A pergunta deve ser do tipo texto' })
  @MinLength(12, { message: 'A pergunta deve ter pelo menos 12 caracteres' })
  question: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser do tipo string' })
  @MinLength(12, { message: 'A descrição deve ter no mínimo 12 caracteres' })
  description: string;

  @IsNotEmpty({ message: 'O tipo da questão deve ser informado' })
  @IsEnum(QuestionType, {
    message: 'A questão deve ser do tipo code/alternative/complete/organize',
  })
  type: QuestionType;

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(2, { message: 'Teve ser incluído no mínimo 2 alternativas' })
  linkedAlternative: string[];
}
