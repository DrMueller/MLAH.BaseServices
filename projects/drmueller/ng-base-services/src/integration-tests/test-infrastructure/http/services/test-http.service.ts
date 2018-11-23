import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpBaseService, ObjectFactoryService } from '../../../../public_api';

@Injectable()
export class TestHttpService extends HttpBaseService {
  public static readonly BaseUrl: string = 'tra';

  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }

  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve(TestHttpService.BaseUrl);
  }
}
