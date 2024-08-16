import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { DificultLevel } from 'src/@types/level.utils';

export class CreateCourseDto {
  @IsNotEmpty({ message: 'O curso deve ter um nome válido' })
  @IsString({ message: 'O nome do curso deve ser um texto' })
  name: string;

  @IsNotEmpty({ message: 'A descricao do curso não deve estar vázia' })
  @MinLength(100, { message: 'A descricao deve ter no mínimo 100 caracteres' })
  description: string;

  @IsNotEmpty({ message: 'Uma dificuldade válida deve ser selecionada' })
  @IsEnum(DificultLevel, {
    message: 'O nível de dificuldade selecionado é inválido',
  })
  dificultLevel: DificultLevel;
}
