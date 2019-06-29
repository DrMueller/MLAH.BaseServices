import { Injectable } from '@angular/core';

import { AppNavigationEntry } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationEntryFactoryService {

  public createNavigationEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(new AppNavigationEntry('Individuals', '/individuals'));
    result.push(new AppNavigationEntry('Observables', '/observables'));
    result.push(new AppNavigationEntry('Demonstrator', '/demonstrator'));

    return result;
  }
}
