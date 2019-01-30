import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalHttpService } from './http/http-base/services/local-http.service';
import { AppSettingsProviderService } from '@drmueller/ng-base-services/lib/areas/app-settings/services/app-settings-provider.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LocalHttpService,
    AppSettingsProviderService
  ]
})
export class NgBaseServicesModule {
}
