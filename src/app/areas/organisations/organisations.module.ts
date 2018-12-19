import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganisationsRoutingModule
  ]
})
export class OrganisationsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: OrganisationsModule
    };
  }
}
