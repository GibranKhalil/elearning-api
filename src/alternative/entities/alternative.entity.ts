export class AlternativeEntity {
  constructor(
    private readonly id: string,
    private content: string,
    private isCorrect: boolean,
    private questionId: string,
  ) {}
}
