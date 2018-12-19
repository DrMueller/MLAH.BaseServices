export class AllDtosFetchingResult {
  private constructor(public isSuccess: boolean, public dtos: any[]) {
  }

  public static createSuccess(dtos: any[]): AllDtosFetchingResult {
    return new AllDtosFetchingResult(true, dtos);
  }

  public static createNonSuccess(): AllDtosFetchingResult {
    return new AllDtosFetchingResult(false, []);
  }
}
