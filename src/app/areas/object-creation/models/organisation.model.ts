import { ConstructableProperty } from 'projects/drmueller/ng-base-services/src/public_api';

import { Individual } from './individual.model';

export class Organisation {

  @ConstructableProperty(Individual)
  public individual: Individual | undefined = undefined;

  @ConstructableProperty(Individual)
  public individuals: Individual[] | undefined = undefined;
  public coName: string | undefined = undefined;
  public name: string | undefined = undefined;
}
