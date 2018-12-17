import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
    HttpBaseService, ObjectFactoryService
} from 'projects/drmueller/ng-base-services/src/public_api';

@Injectable({
  providedIn: 'root'
})

export class IndividualOverviewHttpService extends HttpBaseService {
  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }

  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve('api/IndividualOverview');
  }
}
