import { Component, OnInit } from '@angular/core';
import { MlMediatorService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ml-main-component',
  templateUrl: './ml-main-component.component.html',
  styleUrls: ['./ml-main-component.component.scss']
})
export class MlMainComponentComponent implements OnInit {
  public hello: string;
  public subComponentsVisible = true;
  public helloSubscription: Subscription;

  public get subscriptions(): number {
    return this.mediator._helloSubject.observers.length;
  }

  public constructor(private mediator: MlMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public switchSubComponents(): void {
    this.subComponentsVisible = !this.subComponentsVisible;
  }

  public sayHello(): void {
    this.mediator.sayHello('Hello ML');
  }

}
