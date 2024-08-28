import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAlternativeDto {
  @IsNotEmpty({ message: 'O conteúdo da alternativa não pode estar vazio' })
  @IsString({ message: 'O conteúdo da alternativa deve ser um texto' })
  content: string;

  @IsNotEmpty({ message: 'Deve ser informado o identificador da alternativa' })
  @IsString({ message: 'O ID Deve ser uma string' })
  id: 'A' | 'B' | 'C' | 'D';

  @IsNotEmpty({
    message: 'Você deve definir se a alternativa está correta ou não',
  })
  @IsBoolean({ message: 'A definição de correta deve ser verdadeiro/falso' })
  isCorrect: boolean;
}
