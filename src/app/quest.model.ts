export class Quest {
  constructor(
    public title: string,
    public questGiver: string,
    public description: string,
    public objectives: string[],
    public coinReward: number
  ){}
}
