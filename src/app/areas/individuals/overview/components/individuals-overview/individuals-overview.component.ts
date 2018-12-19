import { Component, OnInit } from '@angular/core';
import { IndividualOverviewDataService } from '../../services';
import { IndividualOverviewEntry } from '../../models';
import { IndividualsNavigationService } from '../../../common/navigation/services';

@Component({
  selector: 'app-individuals-overview',
  templateUrl: './individuals-overview.component.html',
  styleUrls: ['./individuals-overview.component.scss']
})
export class IndividualsOverviewComponent implements OnInit {
  public overviewEntries: IndividualOverviewEntry[] = [];
  public selectedIndividual: IndividualOverviewEntry | null = null;

  public constructor(
    private dataService: IndividualOverviewDataService,
    private navigationService: IndividualsNavigationService) { }

  public async deleteSelectedIndidualAsync(): Promise<void> {
    await this.dataService.deleteIndividualAsync(this.selectedIndividual!.id);
    this.overviewEntries.splice(this.overviewEntries.findIndex(f => f.id === this.selectedIndividual!.id), 1);
    this.selectedIndividual = null;
  }

  public get isIndividualSelected(): boolean {
    return !!this.selectedIndividual;
  }

  public editSelectedIndividual(): void {
    this.navigationService.navigateToEditIndividual(this.selectedIndividual!.id);
  }

  public async ngOnInit(): Promise<void> {
    this.overviewEntries = await this.dataService.loadOverviewAsync();
  }

  public createIndividual(): void {
    this.navigationService.navigateToCreateIndividual();
  }
}
