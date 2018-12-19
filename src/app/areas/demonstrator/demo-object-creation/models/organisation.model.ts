import { ConstructableProperty } from 'projects/drmueller/ng-base-services/src/public_api';

import { Individual } from './individual.model';

export class Organisation {

  @ConstructableProperty(Individual)
  public individual: Individual;

  @ConstructableProperty(Individual)
  public individuals: Individual[];
  public coName: string;
  public name: string;
}
