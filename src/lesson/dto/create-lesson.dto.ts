import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { LessonType } from 'src/@types/Enum/lesson.enum';

export class CreateLessonDto {
  @IsNotEmpty({ message: 'O nome da lição não pode estar vázio' })
  @IsString({ message: 'O nome da lição deve ser um texto' })
  @MinLength(6, { message: 'O nome da lição deve ter no mínimo 6 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'O Tipo da lição deve ser especificado' })
  @IsEnum(LessonType, { message: 'O tipo da lição deve ser aprender/praticar' })
  type: LessonType;
}
