import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/individuals',
    pathMatch: 'full'
  },
  {
    path: 'individuals',
    loadChildren: 'src/app/areas/individuals/individuals.module#IndividualsModule'
  },
  {
    path: 'demonstrator',
    loadChildren: 'src/app/areas/demonstrator/demonstrator.module#DemonstratorModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
