import { Injectable } from '@angular/core';
import { BaseLocalStorageRepositoryService, LocalStorageTableFactoryService } from 'projects/drmueller/ng-base-services/src/public_api';
import { Individual } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IndividualLocalStorageRepositoryService extends BaseLocalStorageRepositoryService<Individual> {
  public constructor(tableFactory: LocalStorageTableFactoryService<Individual>) {
    super(tableFactory);
  }

  protected get modelIdProperty(): keyof Individual {
    return 'id';
  }

  protected get tableKey(): string {
    return Individual.ModelName;
  }
}
