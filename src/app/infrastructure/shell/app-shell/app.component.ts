import { Component, ChangeDetectorRef } from '@angular/core';
import { ErrorDispatcherService, ErrorInformation } from '../error-handling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public errorInformation: ErrorInformation | null = null;

  public constructor(
    errorHandlingInitializationService: ErrorDispatcherService,
    private changeDetectorRef: ChangeDetectorRef) {
    errorHandlingInitializationService.registerErrorCallback(errorInformation => this.onErrorReceived(errorInformation));
  }

  private onErrorReceived(errorInformation: ErrorInformation) {
    this.errorInformation = errorInformation;
    this.changeDetectorRef.detectChanges();
  }
}
