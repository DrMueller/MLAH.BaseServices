import { TestBed } from '@angular/core/testing';


import { CustomErrorHandlerService } from './custom-error-handler.service';
import { ErrorDispatcherService } from './error-dispatcher.service';
import { ErrorInformationFactoryService } from './error-information-factory.service';
import { ErrorUnwrappingService } from './error-unwrapping.service';
import { IgnoredErrorsService } from './ignored-errors.service';
import { provideMock, SpyOf } from '@drmueller/testing';

describe('CustomErrorHandlerService', () => {
  let errorUnwrapperMock: SpyOf<ErrorUnwrappingService>;
  let ignoredErrorsServiceMock: SpyOf<IgnoredErrorsService>;
  let informationFactoryMock: SpyOf<ErrorInformationFactoryService>;
  let dispatcherMock: SpyOf<ErrorDispatcherService>;

  let sut: CustomErrorHandlerService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMock(ErrorUnwrappingService),
      provideMock(IgnoredErrorsService),
      provideMock(ErrorInformationFactoryService),
      provideMock(ErrorDispatcherService)
    ]
  }));

  beforeEach(() => {
    sut = TestBed.get(CustomErrorHandlerService);
    errorUnwrapperMock = TestBed.get(ErrorUnwrappingService);
    ignoredErrorsServiceMock = TestBed.get(IgnoredErrorsService);
    informationFactoryMock = TestBed.get(ErrorInformationFactoryService);
    dispatcherMock = TestBed.get(ErrorDispatcherService);
  });

  it('should be created', (() => {
    expect(sut).toBeTruthy();
  }));

  describe('Handling an error', () => {
    let error: Error;

    beforeEach(() => {
      error = new Error('Hello Test');
    });

    describe('With default parameters', () => {
      beforeEach(() => {
        sut.handleError(error);
      });

      it('Asks the UnwrappingService to unwrap once', () => {
        expect(errorUnwrapperMock.unwrapError).toHaveBeenCalledTimes(1);
      });

      it('Checks if the error is ignored', () => {
        expect(ignoredErrorsServiceMock.isIgnoredError).toHaveBeenCalledTimes(1);
      });
    });

    describe('If not ignored', () => {
      beforeEach(() => {
        ignoredErrorsServiceMock.isIgnoredError.and.returnValue(false);
      });

      beforeEach(() => {
        sut.handleError(error);
      });

      it('Asks the factory to create InformationError once', () => {
        expect(informationFactoryMock.createFromError).toHaveBeenCalledTimes(1);
      });

      it('Dispatches the error once', () => {
        expect(dispatcherMock.publishError).toHaveBeenCalledTimes(1);
      });
    });

    describe('If ignored', () => {
      beforeEach(() => {
        ignoredErrorsServiceMock.isIgnoredError.and.returnValue(true);
      });

      beforeEach(() => {
        sut.handleError(error);
      });

      it('Does not ask the factory to create InformationError', () => {
        expect(informationFactoryMock.createFromError).toHaveBeenCalledTimes(0);
      });

      it('Does not dispatch the error', () => {
        expect(dispatcherMock.publishError).toHaveBeenCalledTimes(0);
      });
    });
  });
});
