import { Component, OnInit } from '@angular/core';
import { DemonstratorNavigationService } from '../../../common/services';

@Component({
  selector: 'app-demonstrator-overview',
  templateUrl: './demonstrator-overview.component.html',
  styleUrls: ['./demonstrator-overview.component.scss']
})
export class DemonstratorOverviewComponent implements OnInit {

  public constructor(private navigationService: DemonstratorNavigationService) { }

  public ngOnInit() {
  }

  public navigateToObjectCreation(): void {
    this.navigationService.navigateToObjectCreation();
  }

  public throwError(): void {
    throw new Error('Hello Error');
  }
}
