import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IndividualDetailsFormBuilderService {
  public constructor(
    private formBuilder: FormBuilder
  ) { }

  public buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(10)]],
      lastName: ['', [Validators.required]],
    });
  }
}
