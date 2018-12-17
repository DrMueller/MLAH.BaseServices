export class IndividualOverviewEntry {
  public id: number;
  public firstName: string;
  public lastName: string;

  public get description(): string {
    return `${this.id} - ${this.firstName} ${this.lastName}`;
  }
}
