import { LocalStorageTableFactoryService } from './local-storage-table-factory.service';
import { LocalStorageTable } from '../models';

export abstract class BaseLocalStorageRepositoryService<TModel> {
  protected abstract get modelIdProperty(): keyof TModel;
  protected abstract get tableKey(): string;

  protected constructor(private tableFactory: LocalStorageTableFactoryService<TModel>) {
  }

  public save(model: TModel): TModel {
    const table = this.tableFactory.createTable(this.tableKey, this.modelIdProperty);
    const returnedEntry = table.saveEntry(model);
    this.persistTable(table);
    return returnedEntry;
  }

  public loadById(id: any): TModel | undefined {
    return this.createTable().loadEntryById(id);
  }

  public delete(id: any): void {
    const table = this.createTable();
    table.deleteEntry(id);
    this.persistTable(table);
  }

  public loadAll(): TModel[] {
    return this.createTable().loadAllEntries();
  }

  private persistTable(table: LocalStorageTable<TModel>): void {
    const nativeString = table.createNativeTableRepresantion();
    localStorage.setItem(this.tableKey, nativeString);
  }

  private createTable(): LocalStorageTable<TModel> {
    return this.tableFactory.createTable(this.tableKey, this.modelIdProperty);
  }
}
