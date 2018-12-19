export class DtoOperationResult {
  private constructor(public isSuccess: boolean, public dto: any) {
  }

  public static createSuccess(dto: any): DtoOperationResult {
    return new DtoOperationResult(true, dto);
  }

  public static createNonSuccess(): DtoOperationResult {
    return new DtoOperationResult(false, null);
  }
}
