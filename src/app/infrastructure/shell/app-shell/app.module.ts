import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BaseInMemoryDbService } from 'projects/drmueller/ng-base-services/src/public_api';

import { AppNavigationModule } from '../app-navigation/app-navigation.module';
import { ErrorHandlingModule } from '../error-handling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualsModule } from 'src/app/areas/individuals/individuals.module';
import { OrganisationsModule } from 'src/app/areas/organisations/organisations.module';
import { environment } from 'src/environments/environment.prod';
import { RxFormsModule } from '../../shared-features/rx-forms';

const inMemoryHttpModules = [];
if (environment.useInMemoryHttp) {
  inMemoryHttpModules.push(
    HttpClientInMemoryWebApiModule.forRoot(
      BaseInMemoryDbService, { dataEncapsulation: false },
    ));
}

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
    ErrorHandlingModule.forRoot(),
    HttpClientModule,
    IndividualsModule.forRoot(),
    OrganisationsModule.forRoot(),
    RxFormsModule.forRoot(),
    ...inMemoryHttpModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
