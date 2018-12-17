import { Injectable } from '@angular/core';
import { IValidationErrorMapperService } from '../validation-error-mapper-service.interface';
import { ValidationErrorMappingResult } from '../../../models/validation-error-mapping-result.model';
import { ValidationError } from '../../../models/validation-error.model';

@Injectable({
  providedIn: 'root'
})
export class RequiredErrorMapperService implements IValidationErrorMapperService {
  private readonly errorKey: string = 'required';

  public map(errorKey: string, _: any): ValidationErrorMappingResult {

    if (errorKey !== this.errorKey) {
      return ValidationErrorMappingResult.createNonSuccess();
    }

    const message = `Field is required.`;
    return new ValidationErrorMappingResult(true, new ValidationError(this.errorKey, message));
  }
}
