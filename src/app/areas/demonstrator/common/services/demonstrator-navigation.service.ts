import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DemonstratorNavigationService {
  public constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['demonstrator']);
  }

  public navigateToObjectCreation(): void {
    this.router.navigate(['/demonstrator/obj']);
  }
}
