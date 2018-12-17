import { CommonModule } from '@angular/common';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';

import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import {
  ErrorDispatcherService
} from './services/error-dispatcher.service';
import { ErrorInformationFactoryService } from './services/error-information-factory.service';
import { ErrorUnwrappingService } from './services/error-unwrapping.service';
import { IgnoredErrorsService } from './services/ignored-errors.service';

@NgModule({
  declarations: [
    ErrorDisplayComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    ErrorDisplayComponent
  ]
})

export class ErrorHandlingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorHandlingModule,
      providers: [
        CustomErrorHandlerService,
        ErrorDispatcherService,
        ErrorInformationFactoryService,
        ErrorUnwrappingService,
        IgnoredErrorsService,
        { provide: ErrorHandler, useClass: CustomErrorHandlerService }
      ]
    };
  }
}
