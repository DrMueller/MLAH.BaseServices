import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DemoObjectCreationComponent
} from './demo-object-creation/components/demo-object-creation';
import { DemonstratorComponent } from './demonstrator.component';
import { DemonstratorOverviewComponent } from './overview/components/demonstrator-overview';

const routes: Routes = [
  {
    path: '',
    component: DemonstratorComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview',
        component: DemonstratorOverviewComponent
      },
      {
        path: 'obj',
        component: DemoObjectCreationComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemonstratorRoutingModule { }
