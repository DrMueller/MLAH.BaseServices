import { Component, OnInit } from '@angular/core';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactoryService } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  public appNavigationEntries: AppNavigationEntry[] = [];

  public constructor(private navigationEntriesFactory: AppNavigationEntryFactoryService) { }

  public ngOnInit(): void {
    this.appNavigationEntries = this.navigationEntriesFactory.createNavigationEntries();
  }
}
