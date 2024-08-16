import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAlternativeDto {
  @IsNotEmpty({ message: 'O conteúdo da alternativa não pode estar vazio' })
  @IsString({ message: 'O conteúdo da alternativa deve ser um texto' })
  content: string;

  @IsNotEmpty({
    message: 'Você deve definir se a alternativa está correta ou não',
  })
  @IsBoolean({ message: 'A definição de correta deve ser verdadeiro/falso' })
  isCorrect: boolean;

  @IsNotEmpty({ message: 'A Alternativa deve estar vinculada a uma questão' })
  @IsString({
    message:
      'O id da questão em que a alternativa está vinculada deve ser um texto',
  })
  questionId: string;
}
