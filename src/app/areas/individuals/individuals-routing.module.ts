import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualsComponent } from './individuals.component';
import { IndividualsOverviewComponent } from './overview/components/individuals-overview';
import { IndividualDetailsComponent } from './details/components/individual-details';
import { IndividualDetailsResolver } from './details/resolvers/individual-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndividualsComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview',
        component: IndividualsOverviewComponent
      },
      {
        path: ':individualId',
        component: IndividualDetailsComponent,
        resolve: { individual: IndividualDetailsResolver }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualsRoutingModule { }
