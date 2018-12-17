import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { IndividualDetails } from '../models';
import { IndividualDetailsDataService } from '../services/individual-details-data.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualDetailsResolver implements Resolve<Promise<IndividualDetails>>  {
  public constructor(private dataService: IndividualDetailsDataService) {
  }

  public async resolve(route: ActivatedRouteSnapshot): Promise<IndividualDetails> {
    const individualId = route.paramMap.get('individualId');
    if (!individualId || individualId === '-1') {
      return Promise.resolve(new IndividualDetails());
    }

    return await this.dataService.loadByIdAsync(parseInt(individualId, 0));
  }
}
