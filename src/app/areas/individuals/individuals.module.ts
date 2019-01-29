import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import {
  DATA_PROVIDER_TOKEN, DTO_ADAPTER_TOKEN
} from 'projects/drmueller/ng-base-services/src/public_api';

import { IndividualInMemoryProviderService } from './common/mock-data/services';
import {
  IndividualDetailsAdapterService
} from './common/mock-data/services/adapters/individual-details-adapter.service';
import {
  IndividualOverviewEntryAdapterService
} from './common/mock-data/services/adapters/individual-overview-entry-adapter.service';
import {
  IndividualDetailsComponent
} from './details/components/individual-details/individual-details.component';
import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsComponent } from './individuals.component';
import {
  IndividualsOverviewComponent
} from './overview/components/individuals-overview/individuals-overview.component';
import { RxFormsModule } from 'src/app/infrastructure/shared-features/rx-forms';

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
          useClass: IndividualInMemoryProviderService
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
