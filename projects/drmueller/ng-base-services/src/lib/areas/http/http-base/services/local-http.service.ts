import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ObjectFactoryService } from '../../../object-creation';
import { HttpBaseService } from './http-base.service';

@Injectable()
export class LocalHttpService extends HttpBaseService {
  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }

  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve('');
  }
}
