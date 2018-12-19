import { IDataProviderservice, IDtoAdapterService } from '../';
import { BaseLocalStorageRepositoryService } from '../../../../local-storage/services';
import { AllDtosFetchingResult, DtoOperationResult } from '../../models';

export abstract class BaseDataProviderService<TModel> implements IDataProviderservice {
  private adapters: IDtoAdapterService<TModel, any>[];

  public constructor(
    private repository: BaseLocalStorageRepositoryService<TModel>,
    adapters: IDtoAdapterService<TModel, any>[]) {
    this.adapters = adapters.filter(adapter => adapter.modelTypeName === this.modelTypeName);
  }

  public createDto(collectionName: string, dto: any): DtoOperationResult {
    const adapter = this.getAdapterByCollectionName(collectionName);
    if (adapter) {
      let model = adapter.createModel(dto);
      model = this.repository.save(model);
      const returnedDto = adapter.adaptToDto(model);
      return DtoOperationResult.createSuccess(returnedDto);
    }

    return DtoOperationResult.createNonSuccess();
  }

  public deleteDto(collectionName: string, dtoId: any): void {
    const adapter = this.getAdapterByCollectionName(collectionName);
    if (adapter) {
      this.repository.delete(dtoId);
    }
  }

  public getDtoById(collectionName: string, id: any): DtoOperationResult {
    const adapter = this.getAdapterByCollectionName(collectionName);
    if (adapter) {
      const model = this.repository.loadById(id);
      if (model) {
        const dto = adapter.adaptToDto(model);
        return DtoOperationResult.createSuccess(dto);
      }
    }

    return DtoOperationResult.createNonSuccess();
  }

  public initializeCollections(collections: any): void {
    this.adapters.forEach(adapter => {
      collections[adapter.collectionName] = [];
    });
  }

  public updateDto(collectionName: string, dto: any): DtoOperationResult {
    const adapter = this.getAdapterByCollectionName(collectionName);
    if (adapter) {
      const id = dto[adapter.dtoIdProperty];
      let model = this.repository.loadById(id);
      if (model) {
        adapter.applyChangesToModel(dto, model);
        model = this.repository.save(model);
        const returnedDto = adapter.adaptToDto(model);
        return DtoOperationResult.createSuccess(returnedDto);
      }
    }

    return DtoOperationResult.createNonSuccess();
  }
  public getAllDtos(collectionName: string): AllDtosFetchingResult {
    const adapter = this.getAdapterByCollectionName(collectionName);
    if (adapter) {
      const allDtos = this.repository.loadAll().map(model => adapter.adaptToDto(model));
      return AllDtosFetchingResult.createSuccess(allDtos);
    }

    return AllDtosFetchingResult.createNonSuccess();
  }

  protected abstract get modelTypeName(): string;

  private getAdapterByCollectionName(collectionName: string): IDtoAdapterService<TModel, any> | undefined {
    return this.adapters.find(f => f.collectionName === collectionName);
  }
}
