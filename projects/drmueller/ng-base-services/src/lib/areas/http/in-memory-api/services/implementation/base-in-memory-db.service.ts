import { Inject, Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { IDataProviderservice } from '../';
import { DATA_PROVIDER_TOKEN } from './constants';

@Injectable({
  providedIn: 'root'
})
export class BaseInMemoryDbService extends InMemoryDbService {
  public constructor(@Inject(DATA_PROVIDER_TOKEN) private dataProviders: IDataProviderservice[]) {
    super();
  }

  public createDb(): {} {
    const collectionList = {};
    return collectionList;
  }

  public delete(requestInfo: RequestInfo): Observable<Response> | null {
    this.dataProviders.forEach(provider => provider.deleteDto(requestInfo.collectionName, requestInfo.id));

    return this.createOkResponse(requestInfo, null);
  }

  public get(requestInfo: RequestInfo): Observable<Response> | null {
    if (requestInfo.id) {
      const dtoById = this
        .dataProviders
        .map(provider => provider.getDtoById(requestInfo.collectionName, requestInfo.id))
        .filter(operationResult => operationResult.isSuccess)[0].dto;

      return this.createOkResponse(requestInfo, dtoById);
    } else {
      const allDtos = this
        .dataProviders
        .map(provider => provider.getAllDtos(requestInfo.collectionName))
        .filter(operationResult => operationResult.isSuccess)[0].dtos;

      return this.createOkResponse(requestInfo, allDtos);
    }
  }

  public post(requestInfo: RequestInfo): Observable<Response> | null {
    const request = <any>requestInfo.req;
    const createdDto = this
      .dataProviders
      .map(provider => provider.createDto(requestInfo.collectionName, request.body))
      .filter(operationResult => operationResult.isSuccess)[0].dto;

    return this.createOkResponse(requestInfo, createdDto);
  }

  public put(requestInfo: RequestInfo): Observable<Response> | null {
    const request = <any>requestInfo.req;
    const updatedDto = this
      .dataProviders
      .map(provider => provider.updateDto(requestInfo.collectionName, request.body))
      .filter(operationResult => operationResult.isSuccess)[0].dto;

    return this.createOkResponse(requestInfo, updatedDto);
  }

  private createOkResponse(requestInfo: RequestInfo, body: any): Observable<Response> {
    return requestInfo.utils.createResponse$(() => <ResponseOptions>{
      status: 200,
      body: body
    });
  }
}
