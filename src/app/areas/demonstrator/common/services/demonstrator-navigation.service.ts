import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DemonstratorNavigationService {
  public constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['overview']);
  }

  public navigateToErrorHandlingDemo(): void {
    this.router.navigate(['errorhandling']);
  }
}
