import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndividualsNavigationService {
  public constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['individuals']);
  }

  public navigateToCreateIndividual(): void {
    this.router.navigate(['individuals', '-1']);
  }

  public navigateToEditIndividual(id: number): void {
    this.router.navigate(['individuals', id]);
  }
}
