export class SectionEntity {
  constructor(
    private readonly id: string,
    private name: string,
    private description: string,
    private linkedLessons: string[],
  ) {}
}
