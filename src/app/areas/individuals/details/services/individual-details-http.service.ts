import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  HttpBaseService, ObjectFactoryService
} from 'projects/drmueller/ng-base-services/src/public_api';

@Injectable({
  providedIn: 'root'
})

export class IndividualDetailsHttpService extends HttpBaseService {
  public static readonly RelativePath = 'IndividualDetails';

  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }

  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve(`api/${IndividualDetailsHttpService.RelativePath}`);
  }
}
