
export interface IDtoAdapterService<TModel, TDto> {
  modelTypeName: string;

  collectionName: string;

  dtoIdProperty: keyof TDto;

  adaptToDto(model: TModel): TDto;

  createModel(dto: TDto): TModel;

  applyChangesToModel(dto: TDto, model: TModel): void;
}
