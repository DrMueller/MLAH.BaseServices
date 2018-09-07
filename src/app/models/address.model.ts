export class Address {
  public streetName: string;

  public streetNumber: number;

  public get completeSreet(): string {
    return `StreetName: ${this.streetName}. StreetNumber: ${this.streetNumber}`;
  }
}
