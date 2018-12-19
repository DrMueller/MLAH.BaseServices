import { Injectable } from '@angular/core';
import { IndividualOverviewEntry } from '../models';
import { IndividualOverviewHttpService } from './individual-overview-http.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualOverviewDataService {
  public constructor(private http: IndividualOverviewHttpService) {
  }

  public async loadOverviewAsync(): Promise<IndividualOverviewEntry[]> {
    return await this.http.getArrayAsync('', IndividualOverviewEntry);
  }

  public async deleteIndividualAsync(individualId: number): Promise<void> {
    return await this.http.deleteAsync(individualId.toString());
  }
}
