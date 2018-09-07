import { CommonModule } from '@angular/common';

import * as objectCreation from './object-creation';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class NgBaseServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgBaseServicesModule,
      providers: [
        objectCreation.ObjectFactoryService
      ]
    };
  }
}
