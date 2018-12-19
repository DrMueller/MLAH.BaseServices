import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

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
import { DTO_ADAPTER_TOKEN, DATA_PROVIDER_TOKEN } from 'projects/drmueller/ng-base-services/src/public_api';
import { IndividualsProviderService } from './common/mock-data/services';
import { IndividualOverviewEntryAdapterService } from './common/mock-data/services/adapters/individual-overview-entry-adapter.service';
import { IndividualDetailsAdapterService } from './common/mock-data/services/adapters/individual-details-adapter.service';

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
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: IndividualsModule,
      providers: [
        {
          provide: DATA_PROVIDER_TOKEN,
          multi: true,
          useClass: IndividualsProviderService
        },
        {
          provide: DTO_ADAPTER_TOKEN,
          multi: true,
          useClass: IndividualOverviewEntryAdapterService
        },
        {
          provide: DTO_ADAPTER_TOKEN,
          multi: true,
          useClass: IndividualDetailsAdapterService
        }
      ]
    };
  }
}
