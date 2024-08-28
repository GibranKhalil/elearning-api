export class AlternativeEntity {
  constructor(
    private id: 'A' | 'B' | 'C' | 'D',
    private content: string,
    private isCorrect: boolean,
  ) {}
}
