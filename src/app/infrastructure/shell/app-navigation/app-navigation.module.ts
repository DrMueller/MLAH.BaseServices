import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppNavigationComponent } from './components/app-navigation';
import { AppNavigationEntryFactoryService } from './services';

@NgModule({
  declarations: [
    AppNavigationComponent
  ],
  exports: [
    AppNavigationComponent
  ],
  providers: [
    AppNavigationEntryFactoryService
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppNavigationModule { }
