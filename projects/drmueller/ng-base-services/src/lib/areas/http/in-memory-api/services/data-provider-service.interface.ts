import { AllDtosFetchingResult, DtoOperationResult } from '../models';

export interface IDataProviderservice {
  updateDto(collectionName: string, dto: any): DtoOperationResult;

  deleteDto(collectionName: string, dtoId: any): void;

  createDto(collectionName: string, dto: any): DtoOperationResult;

  getDtoById(collectionName: string, id: any): DtoOperationResult;

  getAllDtos(collectionName: string): AllDtosFetchingResult;
}
