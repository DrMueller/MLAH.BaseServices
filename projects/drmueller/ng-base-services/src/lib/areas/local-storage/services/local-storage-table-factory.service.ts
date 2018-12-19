import { Injectable } from '@angular/core';
import { LocalStorageTable } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTableFactoryService<TModel> {
  public createTable(tableKey: string, modelIdProperty: keyof TModel): LocalStorageTable<TModel> {
    const tableEntries = this.createTableEntries(tableKey);
    return new LocalStorageTable<TModel>(tableEntries, modelIdProperty);
  }

  private createTableEntries(tableKey: string): TModel[] {
    const localStorageTable = localStorage.getItem(tableKey);

    let tableEntries: TModel[];
    if (localStorageTable) {
      tableEntries = JSON.parse(localStorageTable);
    } else {
      tableEntries = [];
    }

    return tableEntries;
  }
}
