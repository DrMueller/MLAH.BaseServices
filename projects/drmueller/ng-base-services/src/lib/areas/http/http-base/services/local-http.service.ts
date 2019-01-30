import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpBaseService } from './http-base.service';
import { ObjectFactoryService } from '../../../object-creation/services/object-factory.service';

@Injectable()
export class LocalHttpService extends HttpBaseService {
  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }

  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve('');
  }
}
