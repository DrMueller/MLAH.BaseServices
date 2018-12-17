import { ErrorHandler, Injectable } from '@angular/core';

import { ErrorDispatcherService } from './error-dispatcher.service';
import { ErrorInformationFactoryService } from './error-information-factory.service';
import { ErrorUnwrappingService } from './error-unwrapping.service';
import { IgnoredErrorsService } from './ignored-errors.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
  public constructor(
    private errorUnwrappingService: ErrorUnwrappingService,
    private ignoredErrorsService: IgnoredErrorsService,
    private errorInformationFactory: ErrorInformationFactoryService,
    private dispatcher: ErrorDispatcherService) {
  }

  public handleError(error: Error): void {
    console.log(error);
    const unpackedError = this.errorUnwrappingService.unwrapError(error);

    if (this.ignoredErrorsService.isIgnoredError(unpackedError)) {
      return;
    }

    const errorInformation = this.errorInformationFactory.createFromError(unpackedError);
    this.dispatcher.publishError(errorInformation);
  }
}
