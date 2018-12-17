import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
    ValidationErrorsComponent
} from './components/validation-errors/validation-errors.component';
import { VALIDATION_ERROR_MAPPER_TOKEN } from './services/error-mappers/constants';
import {
    MinLengthErrorMapperService
} from './services/error-mappers/implementation/min-length-error-mapper.service';
import {
    RequiredErrorMapperService
} from './services/error-mappers/implementation/required-error-mapper.service';
import { MaxLengthErrorMapperService } from './services/error-mappers/implementation/max-length-error-mapper.service';

@NgModule({
  declarations: [ValidationErrorsComponent],
  exports: [
    ReactiveFormsModule,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RxFormsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RxFormsModule,
      providers: [
        {
          provide: VALIDATION_ERROR_MAPPER_TOKEN,
          multi: true,
          useClass: MinLengthErrorMapperService
        },
        {
          provide: VALIDATION_ERROR_MAPPER_TOKEN,
          multi: true,
          useClass: RequiredErrorMapperService
        },
        {
          provide: VALIDATION_ERROR_MAPPER_TOKEN,
          multi: true,
          useClass: MaxLengthErrorMapperService
        }
      ]
    };
  }
}
