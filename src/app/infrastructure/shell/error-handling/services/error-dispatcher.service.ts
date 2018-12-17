import { Injectable } from '@angular/core';
import { ErrorCallback } from '../types/error-callback.type';
import { ErrorInformation } from '../models/error-information.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorDispatcherService {
  private errorCallback: ErrorCallback;

  public publishError(errorInformation: ErrorInformation): void {
    this.errorCallback(errorInformation);
  }

  public registerErrorCallback(errorCallback: ErrorCallback): void {
    this.errorCallback = errorCallback;
  }
}
