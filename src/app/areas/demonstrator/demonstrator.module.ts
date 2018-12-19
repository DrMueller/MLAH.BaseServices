import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DemoObjectCreationComponent
} from './demo-object-creation/components/demo-object-creation';
import { DemonstratorRoutingModule } from './demonstrator-routing.module';
import { DemonstratorComponent } from './demonstrator.component';
import { DemonstratorOverviewComponent } from './overview/components/demonstrator-overview';

@NgModule({
  declarations: [
    DemonstratorComponent,
    DemonstratorOverviewComponent,
    DemoObjectCreationComponent
  ],
  imports: [
    CommonModule,
    DemonstratorRoutingModule
  ]
})
export class DemonstratorModule { }
