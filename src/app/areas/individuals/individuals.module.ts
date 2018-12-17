import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { RxFormsModule } from 'src/app/infrastructure/shared-features/rx-forms';

import {
    IndividualDetailsComponent
} from './details/components/individual-details/individual-details.component';
import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsComponent } from './individuals.component';
import {
    IndividualsOverviewComponent
} from './overview/components/individuals-overview/individuals-overview.component';

@NgModule({
  declarations: [
    IndividualsComponent,
    IndividualsOverviewComponent,
    IndividualDetailsComponent
  ],
  imports: [
    CommonModule,
    IndividualsRoutingModule,
    TableModule,
    RxFormsModule,
  ]
})

export class IndividualsModule {
}
