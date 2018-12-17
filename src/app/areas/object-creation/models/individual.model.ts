import { ConstructableProperty } from 'projects/drmueller/ng-base-services/src/public_api';

import { Address } from './address.model';

export class Individual {

  @ConstructableProperty(Address)
  public address: Address | undefined = undefined;
  @ConstructableProperty(Address)
  public address2: Address | undefined = undefined;
  public firstName: string | undefined = undefined;
  public id: string | undefined = undefined;
  public lastName: string | undefined = undefined;
  public static createSome(): Individual[] {
    const result = [
      <Individual>{
        id: 'b321',
        firstName: 'Matthias',
        lastName: 'Müller'
      },
      <Individual>{
        id: 'a123',
        firstName: 'Patrick',
        lastName: 'Stewart'
      },
      <Individual>{
        id: 'c567',
        firstName: 'Stefanie',
        lastName: 'Heinzmann'
      }
    ];

    return result;
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
