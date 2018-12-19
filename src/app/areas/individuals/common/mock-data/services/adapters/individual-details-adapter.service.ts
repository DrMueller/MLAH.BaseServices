import { Injectable } from '@angular/core';

import { IDtoAdapterService } from 'projects/drmueller/ng-base-services/src/public_api';

import { Individual } from '../../models';
import { IndividualDetails } from 'src/app/areas/individuals/details/models';
import { IndividualDetailsHttpService } from 'src/app/areas/individuals/details/services';

@Injectable({
  providedIn: 'root'
})
export class IndividualDetailsAdapterService implements IDtoAdapterService<Individual, IndividualDetails> {
  public adaptToDto(model: Individual): IndividualDetails {
    const dto = new IndividualDetails();
    dto.id = model.id;
    dto.firstName = model.firstName;
    dto.lastName = model.lastName;
    return dto;
  }

  public createModel(dto: IndividualDetails): Individual {
    return new Individual(dto.id, dto.firstName, dto.lastName);
  }

  public get collectionName(): string {
    return IndividualDetailsHttpService.RelativePath;
  }

  public get modelTypeName(): string {
    return Individual.ModelName;
  }
  public get dtoIdProperty(): keyof IndividualDetails {
    return 'id';
  }

  applyChangesToModel(dto: IndividualDetails, model: Individual): void {
    model.id = dto.id;
    model.firstName = dto.firstName;
    model.lastName = dto.lastName;
  }
}
