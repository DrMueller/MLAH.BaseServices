import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RxFormModelBindingService } from 'src/app/infrastructure/shared-features/rx-forms';

import { IndividualDetails } from '../../models';
import { IndividualDetailsDataService, IndividualDetailsFormBuilderService } from '../../services';
import { IndividualsNavigationService } from '../../../common/navigation/services';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent implements OnInit {
  public individual: IndividualDetails | null = null;
  public individualFormGroup: FormGroup;

  public constructor(
    private route: ActivatedRoute,
    private formBuilder: IndividualDetailsFormBuilderService,
    private binder: RxFormModelBindingService,
    private dataService: IndividualDetailsDataService,
    private navigationService: IndividualsNavigationService) {
  }

  public async saveIndividualAsync(): Promise<void> {
    this.binder.bindFormGroupToModel(this.individualFormGroup, this.individual);
    await this.dataService.saveAsync(this.individual!);
    this.navigationService.navigateToOverview();
  }

  public cancel(): void {
    this.navigationService.navigateToOverview();
  }

  public get canSaveIndividual(): boolean {
    return this.individualFormGroup.valid;
  }

  public get title(): string {
    if (this.individual!.id) {
      return `Edit Individual - ID ${this.individual!.id}`;
    }

    return 'New Individual';
  }

  public getValidityClass(formControlName: string): string {
    const formControl = this.individualFormGroup.controls[formControlName];
    if (!formControl.touched) {
      return '';
    }

    if (formControl.invalid) {
      return 'is-invalid';
    }

    return 'is-valid';
  }

  public ngOnInit() {
    this.individualFormGroup = this.formBuilder.buildFormGroup();

    this.route.data.subscribe(data => {
      this.individual = <IndividualDetails>data['individual'];
      this.binder.bindModelToFormGroup(this.individual, this.individualFormGroup);
    });
  }
}
