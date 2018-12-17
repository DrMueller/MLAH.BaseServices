import { Injectable } from '@angular/core';
import { IndividualDetails } from '../models';
import { IndividualDetailsHttpService } from './individual-details-http.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualDetailsDataService {
  public constructor(private http: IndividualDetailsHttpService) { }

  public async loadByIdAsync(individualId: number): Promise<IndividualDetails> {
    return await this.http.getAsync(individualId.toString(), IndividualDetails);
  }

  public async saveAsync(details: IndividualDetails): Promise<IndividualDetails> {
    if (details.id) {
      return await this.http.putAsync('', details, IndividualDetails);
    } else {
      return await this.http.postAsync('', details, IndividualDetails);
    }
  }
}
