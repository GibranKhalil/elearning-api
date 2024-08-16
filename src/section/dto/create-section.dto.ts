import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty({ message: 'O nome da seção não pode estar vazia' })
  @IsString({ message: 'O nome da seção deve ser do tipo texto' })
  @MinLength(6, {
    message: 'O nome da seção deve ter pelo menos 6 caracteres',
  })
  name: string;

  @IsString({ message: 'A descrição deve ser do tipo string' })
  @MinLength(25, { message: 'A descrição deve ter no mínimo 25 caracteres' })
  descricao: string;

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1, { message: 'Teve ser incluído no mínimo 1 lição' })
  linkedLessons: string[];
}
