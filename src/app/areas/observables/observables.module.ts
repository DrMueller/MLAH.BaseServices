import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesRoutingModule } from './observables-routing.module';
import { MlMainComponentComponent } from './memory-leak/components/ml-main-component';
import { MlSub1ComponentComponent } from './memory-leak/components/ml-sub1-component';
import { MlSub2ComponentComponent } from './memory-leak/components/ml-sub2-component';
import { ObservablesComponent } from './entry-point/components/observables';
import { SicMainComponentComponent } from './service-in-component/components/sic-main-component/sic-main-component.component';
import { SicSub1ComponentComponent } from './service-in-component/components/sic-sub1-component/sic-sub1-component.component';
import { SicSub2ComponentComponent } from './service-in-component/components/sic-sub2-component/sic-sub2-component.component';
import { SicParentComponentComponent } from './service-in-component/components/sic-parent-component/sic-parent-component.component';
import { GsMainComponentComponent } from './global-service/components/gs-main-component/gs-main-component.component';
import { GsSub1ComponentComponent } from './global-service/components/gs-sub1-component/gs-sub1-component.component';
import { GsSub2ComponentComponent } from './global-service/components/gs-sub2-component/gs-sub2-component.component';

@NgModule({
  declarations: [
    MlMainComponentComponent,
    MlSub1ComponentComponent,
    MlSub2ComponentComponent,
    ObservablesComponent,
    SicMainComponentComponent,
    SicSub1ComponentComponent,
    SicSub2ComponentComponent,
    SicParentComponentComponent,
    GsMainComponentComponent,
    GsSub1ComponentComponent,
    GsSub2ComponentComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
