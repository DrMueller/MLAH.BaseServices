import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IgnoredErrorsService {
  public isIgnoredError(error: any): boolean {
    const result = this.isIgnoredRoutingError(error);
    return result;
  }

  private isIgnoredRoutingError(error: any): boolean {
    const message = this.unpackMessage(error);

    const signInCallbackError = 'Cannot match any routes. URL Segment: \'id_token\'';
    if (message.indexOf(signInCallbackError) > -1) {
      return true;
    }

    return false;
  }

  private unpackMessage(error: any): string {
    if (error.hasOwnProperty('message')) {
      return error.message;
    }
    if (error.hasOwnProperty('statusText')) {
      return error.statusText;
    }

    return '';
  }
}
