import { Component, OnInit } from '@angular/core';

import { ObjectFactoryService } from '../../projects/drmueller/ng-base-services/src/public_api';
import { Individual, Organisation } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public organisation: Organisation;

  public constructor(private objectFactory: ObjectFactoryService) {
  }

  public get individualAddress2CompleteStreet(): string {
    return this.organisation.individual.address2.completeSreet;
  }

  public get individualAddressCompleteStreet(): string {
    return this.organisation.individual.address.completeSreet;
  }

  public get individualFullName(): string {
    return this.organisation.individual.fullName;
  }

  public get organisationIndividuals(): Individual[] {
    return this.organisation.individuals;
  }

  public ngOnInit() {
    const notReallyAnOrganisation = this.createOrganisationFromAnonymous();
    this.organisation = this.objectFactory.create(notReallyAnOrganisation, Organisation);
  }


  private createOrganisationFromAnonymous(): Organisation {
    const result: any = new Object();
    result.coName = 'Co123';
    result.name = 'Fake Org 321';
    result.individual = new Object();
    result.individual.firstName = 'Matthias';
    result.individual.lastName = 'Müller';
    result.individual.id = '1234';

    result.individual.address = new Object();
    result.individual.address.streetName = 'Fakestreet';

    result.individual.address2 = new Object();
    result.individual.address2.streetName = 'Street 2';
    result.individual.address2.streetNumber = 'Number 2';

    result.individuals = [];
    result.individuals.push({
      firstName: 'Jaime',
      lastName: 'Lannister',
      id: '467'
    });

    result.individuals.push({
      firstName: 'Joe',
      lastName: 'Abercombie',
      id: '5789'
    });

    return result;
  }
}
