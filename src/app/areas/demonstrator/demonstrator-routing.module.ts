import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemonstratorComponent } from './demonstrator.component';
import { DemonstratorOverviewComponent } from './overview/components/demonstrator-overview';
import { DemoErrorHandlingComponent } from './demo-error-handling/components/demo-error-handling';

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
        path: 'errorhandling',
        component: DemoErrorHandlingComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemonstratorRoutingModule { }
