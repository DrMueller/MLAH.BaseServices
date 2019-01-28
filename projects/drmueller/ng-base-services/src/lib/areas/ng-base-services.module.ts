import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalHttpService } from './http/http-base';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LocalHttpService
  ]
})
export class NgBaseServicesModule {
}
