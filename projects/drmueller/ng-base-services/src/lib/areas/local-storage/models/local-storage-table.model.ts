export class LocalStorageTable<TModel> {
  public constructor(private tableEntries: TModel[], private modelIdProperty: keyof TModel) {
  }

  public createNativeTableRepresantion(): string {
    return JSON.stringify(this.tableEntries);
  }

  public deleteEntry(id: any): void {
    const existingIndex = this.tableEntries.findIndex(entry => this.checkIfIdsMatch(entry[this.modelIdProperty], id));
    if (existingIndex > -1) {
      this.tableEntries.splice(existingIndex, 1);
    }
  }

  public loadAllEntries(): TModel[] {
    return this.tableEntries;
  }

  public loadEntryById(id: any): TModel | undefined {
    return this.tableEntries.find(entry => this.checkIfIdsMatch(entry[this.modelIdProperty], id));
  }

  public saveEntry(model: TModel): TModel {
    if (model[this.modelIdProperty]) {
      return this.updateEntry(model);
    } else {
      return this.insertEntry(model);
    }
  }

  private checkIfIdsMatch(id1: any, id2: any): boolean {
    if (typeof id1 !== 'string') {
      id1 = id1.toString();
    }

    if (typeof id2 !== 'string') {
      id2 = id2.toString();
    }

    return id1 === id2;
  }

  private getNextId(): any {
    if (this.tableEntries.length === 0) {
      return 1;
    } else {
      const lastId = this.tableEntries.map(entry => entry[this.modelIdProperty]).sort((a: any, b: any) => {
        return b - a;
      })[0];

      return parseInt(lastId.toString(), 0) + 1;
    }
  }

  private insertEntry(model: TModel): TModel {
    model[this.modelIdProperty] = this.getNextId();
    this.tableEntries.push(model);
    return model;
  }

  private updateEntry(model: TModel): TModel {
    const existingIndex = this
      .tableEntries
      .findIndex(entry => this.checkIfIdsMatch(entry[this.modelIdProperty], model[this.modelIdProperty]));
    if (existingIndex > -1) {
      this.tableEntries.splice(existingIndex, 1);
    }

    this.tableEntries.push(model);
    return model;
  }
}
