import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemonstratorRoutingModule } from './demonstrator-routing.module';
import { DemoErrorHandlingComponent } from './demo-error-handling/components/demo-error-handling';
import { DemonstratorComponent } from './demonstrator.component';
import { DemonstratorOverviewComponent } from './overview/components/demonstrator-overview';

@NgModule({
  declarations: [
    DemoErrorHandlingComponent,
    DemonstratorComponent,
    DemonstratorOverviewComponent
  ],
  imports: [
    CommonModule,
    DemonstratorRoutingModule
  ]
})
export class DemonstratorModule { }
