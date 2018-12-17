import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Individual } from 'src/app/areas/individuals/common/models';
import { IndividualOverviewEntry } from '../../overview/models';
import { IndividualDetails } from '../../details/models';
import { ResponseOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class MockHttpClientService implements InMemoryDbService {
  private overviewEntries: IndividualOverviewEntry[] = [];
  private detailEntries: IndividualDetails[] = [];
  private individuals: Individual[];

  public createDb(): {} {
    this.individuals = [
      new Individual(1, 'Matthias', 'Müller'),
      new Individual(2, 'Steve', 'Austin'),
      new Individual(3, 'Jane', 'Doe')
    ];

    this.createOverviewEntries();
    this.createDetailEntries();

    // For Every endpoint configured, one List has to be returned
    // For example: 'api/IndividualOverview maps to the List IndividualOverview
    return {
      'IndividualOverview': this.overviewEntries,
      'IndividualDetails': this.detailEntries
    };
  }

  public genId(individuals: Individual[]): number {
    const result = individuals.length > 0 ? Math.max(...individuals.map(individual => individual.id)) + 1 : 4;
    return result;
  }

  public responseInterceptor(responseOptions: ResponseOptions, requestInfo: RequestInfo): ResponseOptions {
    if (requestInfo.method === 'post') {
      this.alignAddedEntry();
    }

    if (requestInfo.method === 'put') {
      const request: any = requestInfo.req;
      this.alignUpdatedEntry(request.body);
    }

    if (requestInfo.method === 'delete') {
      this.alignDeletedEntry(requestInfo.id);
    }

    return responseOptions;
  }

  private alignAddedEntry(): void {
    const addedDetailEntry = this
      .detailEntries
      .find(detail => this.overviewEntries.findIndex(overview => overview.id === detail.id) === -1)!;

    const newOverviewEntry = new IndividualOverviewEntry();
    newOverviewEntry.id = addedDetailEntry.id;
    newOverviewEntry.firstName = addedDetailEntry.firstName;
    newOverviewEntry.lastName = addedDetailEntry.lastName;

    this.overviewEntries.push(newOverviewEntry);
  }

  private alignDeletedEntry(id: number) {
    this.detailEntries.splice(this.detailEntries.findIndex(f => f.id === id), 1);
  }

  private alignUpdatedEntry(updatedEntry: any) {
    const udpatedDetails = <IndividualDetails>updatedEntry;
    const overviewEntry = this.overviewEntries.find(f => f.id === udpatedDetails.id)!;

    overviewEntry.firstName = udpatedDetails.firstName;
    overviewEntry.lastName = udpatedDetails.lastName;
  }

  private createDetailEntries(): void {
    this.detailEntries = [];

    this.individuals.forEach(ind => {
      const detailsEntry = <IndividualDetails>{
        firstName: ind.firstName,
        id: ind.id,
        lastName: ind.lastName
      };

      this.detailEntries.push(detailsEntry);
    });
  }

  private createOverviewEntries(): void {
    this.overviewEntries = [];

    this.individuals.forEach(ind => {
      const overviewEntry = <IndividualOverviewEntry>{
        firstName: ind.firstName,
        id: ind.id,
        lastName: ind.lastName
      };

      this.overviewEntries.push(overviewEntry);
    });
  }
}
