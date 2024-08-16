import { DificultLevel } from 'src/utils/level.utils';

export class CourseEntity {
  constructor(
    private nome: string,
    private descricao: string,
    private nivel: DificultLevel,
    private id: string,
  ) {}
}
