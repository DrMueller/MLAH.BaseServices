import { Injectable } from '@angular/core';
import { IValidationErrorMapperService } from '../validation-error-mapper-service.interface';
import { ValidationErrorMappingResult } from '../../../models/validation-error-mapping-result.model';
import { ValidationError } from '../../../models/validation-error.model';

@Injectable({
  providedIn: 'root'
})
export class MaxLengthErrorMapperService implements IValidationErrorMapperService {
  private readonly errorKey: string = 'maxlength';

  public map(errorKey: string, error: any): ValidationErrorMappingResult {
    if (errorKey !== this.errorKey) {
      return ValidationErrorMappingResult.createNonSuccess();
    }

    const message = `Maximal length is ${error.requiredLength}, actual length is ${error.actualLength}.`;
    return new ValidationErrorMappingResult(true, new ValidationError(this.errorKey, message));
  }
}
