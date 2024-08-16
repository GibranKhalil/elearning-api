import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { DificultLevel } from 'src/utils/level.utils';

export class CreateLearningPathDto {
  @IsNotEmpty({ message: 'A formação deve ter um nome válido' })
  @IsString({ message: 'O nome da formação deve ser um texto' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'A descricao da formação não deve estar vázia' })
  @MinLength(100, { message: 'A descricao deve ter no mínimo 100 caracteres' })
  description: string;

  @IsNotEmpty({ message: 'Uma dificuldade válida deve ser selecionada' })
  @IsEnum(DificultLevel, {
    message: 'O nível de dificuldade selecionado é inválido',
  })
  dificultLevel: DificultLevel;
}
