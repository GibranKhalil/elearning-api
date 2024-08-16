import { DificultLevel } from 'src/utils/level.utils';

export class LearningPathEntity {
  constructor(
    private name: string,
    private description: string,
    private dificultLevel: DificultLevel,
    private id: string,
  ) {}
}
