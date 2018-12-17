import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ErrorInformation } from '../../models/error-information.model';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent {

  @Input()
  public errorInformation: ErrorInformation | null;

  public constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public closeClicked(): void {
    this.cleanErorInfo();
  }
  public onHiding(): void {
    this.cleanErorInfo();
  }

  private cleanErorInfo(): void {
    this.errorInformation = null;
    this.changeDetectorRef.detectChanges();
  }
}
