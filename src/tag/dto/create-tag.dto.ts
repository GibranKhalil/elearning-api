import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: 'A tag deve conter um nome válido' })
  @MinLength(3, { message: 'A tag deve ter no mínimo 3 caracteres' })
  name: string;
}
