import { DificultLevel } from 'src/@types/Enum/dificultLevel.enum';

export class CourseEntity {
  constructor(
    private name: string,
    private description: string,
    private dificultLevel: DificultLevel,
    private id: string,
    private linkedSection: string[],
  ) {}
}
