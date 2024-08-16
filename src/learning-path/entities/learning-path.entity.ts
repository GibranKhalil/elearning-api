import { DificultLevel } from 'src/@types/Enum/dificultLevel.enum';

export class LearningPathEntity {
  constructor(
    private name: string,
    private description: string,
    private dificultLevel: DificultLevel,
    private id: string,
  ) {}
}
