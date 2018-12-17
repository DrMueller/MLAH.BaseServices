import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demonstrator-overview',
  templateUrl: './demonstrator-overview.component.html',
  styleUrls: ['./demonstrator-overview.component.scss']
})
export class DemonstratorOverviewComponent implements OnInit {

  public constructor() { }

  public ngOnInit() {
  }


  public throwError(): void {
    throw new Error('Hello Error');
  }
}
