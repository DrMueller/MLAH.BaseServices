import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BaseInMemoryDbService } from 'projects/drmueller/ng-base-services/src/public_api';

import { RxFormsModule } from '../../shared-features/rx-forms';
import { AppNavigationModule } from '../app-navigation/app-navigation.module';
import { ErrorHandlingModule } from '../error-handling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualsModule } from 'src/app/areas/individuals/individuals.module';
import { OrganisationsModule } from 'src/app/areas/organisations/organisations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppNavigationModule,
    RxFormsModule.forRoot(),
    ErrorHandlingModule.forRoot(),
    HttpClientModule,
    IndividualsModule.forRoot(),
    OrganisationsModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      BaseInMemoryDbService, { dataEncapsulation: false },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
