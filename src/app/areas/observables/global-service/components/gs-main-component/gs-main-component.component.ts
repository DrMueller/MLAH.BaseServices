import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GsMediatorService } from '../../services';

@Component({
  selector: 'app-gs-main-component',
  templateUrl: './gs-main-component.component.html',
  styleUrls: ['./gs-main-component.component.scss']
})
export class GsMainComponentComponent implements OnInit {
  public hello: string;
  public subComponentsVisible = true;
  public helloSubscription: Subscription;

  public get subscriptions(): number {
    return this.mediator._helloSubject.observers.length;
  }

  public constructor(private mediator: GsMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public switchSubComponents(): void {
    this.subComponentsVisible = !this.subComponentsVisible;
  }

  public sayHello(): void {
    this.mediator.sayHello('Hello GS');
  }
}
