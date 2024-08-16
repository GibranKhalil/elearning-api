import { DificultLevel } from 'src/@types/Enum/dificultLevel.enum';

export class CourseEntity {
  constructor(
    private nome: string,
    private descricao: string,
    private nivel: DificultLevel,
    private id: string,
  ) {}
}
