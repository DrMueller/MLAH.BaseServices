import { Injectable, Inject } from '@angular/core';

import {
  BaseDataProviderService, DTO_ADAPTER_TOKEN, IDtoAdapterService
} from 'projects/drmueller/ng-base-services/src/public_api';

import { Individual } from '../models';
import {
  IndividualLocalStorageRepositoryService
} from './individual-local-storage-repository.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualsProviderService extends BaseDataProviderService<Individual> {
  public constructor(
    repository: IndividualLocalStorageRepositoryService,
    @Inject(DTO_ADAPTER_TOKEN) adapters: IDtoAdapterService<Individual, any>[]
  ) {
    super(repository, adapters);
  }

  protected get modelTypeName(): string {
    return Individual.ModelName;
  }

  protected get keyProperty(): keyof Individual {
    return 'id';
  }
}
