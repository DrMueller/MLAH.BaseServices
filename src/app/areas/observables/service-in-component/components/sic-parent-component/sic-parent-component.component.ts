import { Component } from '@angular/core';

@Component({
  selector: 'app-sic-parent-component',
  templateUrl: './sic-parent-component.component.html',
  styleUrls: ['./sic-parent-component.component.scss']
})
export class SicParentComponentComponent {
  public mainComponentVisible = true;

  public switchMainVisibility(): void {
    this.mainComponentVisible = !this.mainComponentVisible;
  }
}
