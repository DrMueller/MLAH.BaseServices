import { Injectable } from '@angular/core';

import { IDtoAdapterService } from 'projects/drmueller/ng-base-services/src/public_api';
import { IndividualOverviewEntry } from 'src/app/areas/individuals/overview/models';
import { IndividualOverviewHttpService } from 'src/app/areas/individuals/overview/services';

import { Individual } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class IndividualOverviewEntryAdapterService implements IDtoAdapterService<Individual, IndividualOverviewEntry> {
  public adaptToDto(model: Individual): IndividualOverviewEntry {
    const dto = new IndividualOverviewEntry();
    dto.firstName = model.firstName;
    dto.id = model.id;
    dto.lastName = model.lastName;
    return dto;
  }

  public applyChangesToModel(dto: IndividualOverviewEntry, model: Individual): void {
    model.firstName = dto.firstName;
    model.id = dto.id;
    model.lastName = dto.lastName;
  }

  public get collectionName(): string {
    return IndividualOverviewHttpService.RelativePath;
  }

  public get dtoIdProperty(): keyof IndividualOverviewEntry {
    return 'id';
  }
  public createModel(dto: IndividualOverviewEntry): Individual {
    return new Individual(dto.id, dto.firstName, dto.lastName);
  }
  public get modelTypeName(): string {
    return Individual.ModelName;
  }
}
