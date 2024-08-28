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
import { CreateAlternativeDto } from './create-alternative.dto';
import { Type } from 'class-transformer';
import { TagEntity } from 'src/tag/entities/tag.entity';

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
  @IsArray()
  @ArrayMinSize(1, { message: 'Deve ser vinculado no mínimo 1 tag' })
  @Type(() => TagEntity)
  linkedTags: TagEntity[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(2, { message: 'Deve ser criado no mínimo 2 alternativas' })
  @Type(() => CreateAlternativeDto)
  alternatives: CreateAlternativeDto[];
}
