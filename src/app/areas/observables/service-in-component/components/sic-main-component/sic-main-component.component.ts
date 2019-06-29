import { Component, OnInit, OnDestroy } from '@angular/core';
import { SicMediatorService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sic-main-component',
  templateUrl: './sic-main-component.component.html',
  styleUrls: ['./sic-main-component.component.scss'],
  providers: [SicMediatorService]
})
export class SicMainComponentComponent implements OnInit, OnDestroy {

  public hello: string;
  public subComponentsVisible = true;
  public helloSubscription: Subscription;

  public get subscriptions(): number {
    return this.mediator._helloSubject.observers.length;
  }

  public constructor(private mediator: SicMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public switchSubComponents(): void {
    this.subComponentsVisible = !this.subComponentsVisible;
  }

  public sayHello(): void {
    this.mediator.sayHello('Hello SIC');
  }

  public ngOnDestroy(): void {
    console.log('SicMainComponentComponent destroyed');
  }
}
