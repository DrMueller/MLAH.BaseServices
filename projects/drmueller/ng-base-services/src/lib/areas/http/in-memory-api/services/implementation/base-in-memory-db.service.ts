import { Inject, Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { IInMemoryDataProviderservice } from '../';
import { DATA_PROVIDER_TOKEN } from './constants';

@Injectable({
  providedIn: 'root'
})
export class BaseInMemoryDbService extends InMemoryDbService {
  public constructor(@Inject(DATA_PROVIDER_TOKEN) private dataProviders: IInMemoryDataProviderservice[]) {
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
      return this.getDtoById(requestInfo);
    } else {
      return this.getAllDtos(requestInfo);
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

  private getAllDtos(requestInfo: RequestInfo): Observable<Response> | null {
    const successFullOperations = this
      .dataProviders
      .map(provider => provider.getAllDtos(requestInfo.collectionName))
      .filter(operationResult => operationResult.isSuccess);

    if (successFullOperations.length > 0) {
      return this.createOkResponse(requestInfo, successFullOperations[0].dtos);
    }

    return null;
  }

  private getDtoById(requestInfo: RequestInfo): Observable<Response> | null {
    const successFullOperations = this
      .dataProviders
      .map(provider => provider.getDtoById(requestInfo.collectionName, requestInfo.id))
      .filter(operationResult => operationResult.isSuccess);

    if (successFullOperations.length > 0) {
      return this.createOkResponse(requestInfo, successFullOperations[0].dto);
    }

    return null;
  }
}
