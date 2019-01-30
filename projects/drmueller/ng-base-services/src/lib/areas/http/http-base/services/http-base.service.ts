import { HttpClient } from '@angular/common/http';

import { IParameterlessConstructor } from '@drmueller/language-extensions';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { ContentType } from '../enums';
import { HttpBaseServant } from './servants';
import { ObjectFactoryService } from '../../../object-creation/services/object-factory.service';

export abstract class HttpBaseService {
  protected constructor(
    private httpClient: HttpClient,
    private objectFactoryService: ObjectFactoryService) { }

  public async deleteAsync(relativeUrl: string): Promise<void> {
    const completeUrl = await this.createCompleteUrlAsync(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions();
    const result = this.processResponse<void>(this.httpClient.delete<void>(completeUrl, requestOptions));

    return result;
  }

  public async getArrayAsync<T>(
    relativeUrl: string,
    ctor: IParameterlessConstructor<T>): Promise<T[]> {

    const completeUrl = await this.createCompleteUrlAsync(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions();
    const array = await this.processResponse(this.httpClient.get<T[]>(completeUrl, requestOptions));

    const arrayResult = array.map<T>(item => {
      const newObj = this.objectFactoryService.create(item, ctor);
      return <T>newObj;
    });

    return arrayResult;
  }

  public async getAsync<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    const completeUrl = await this.createCompleteUrlAsync(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions();

    return this.processResponse(this.httpClient.get<T>(completeUrl, requestOptions), ctor);
  }

  public async patchAsync<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = await this.createCompleteUrlAsync(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions(contentType);
    return this.processResponse<T>(this.httpClient.patch<T>(completeUrl, body, requestOptions), ctor);
  }

  public async postAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = await this.createCompleteUrlAsync(relativeUrl);

    const requestOptions = HttpBaseServant.createOptions(contentType);
    return this.processResponse(this.httpClient.post<T>(completeUrl, body, requestOptions), ctor);
  }

  public async putAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = await this.createCompleteUrlAsync(relativeUrl);
    const requestOptions = HttpBaseServant.createOptions(contentType);
    return this.processResponse(this.httpClient.put<T>(completeUrl, body, requestOptions), ctor);
  }

  protected abstract getBaseUrlAsync(): Promise<string>;

  private async createCompleteUrlAsync(relativeUrl: string): Promise<string> {
    const baseUrl = await this.getBaseUrlAsync();
    return HttpBaseServant.createCompleteUrlAsync(baseUrl, relativeUrl);
  }

  private processResponse<T>(response: Observable<T>, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    let mappedResult = response;

    if (ctor) {
      mappedResult = mappedResult.pipe<T>(
        map(f => {
          const newObj = this.objectFactoryService.create(f, ctor);
          return newObj;
        })
      );
    }

    const result = mappedResult.toPromise();
    return result;
  }
}
