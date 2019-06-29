import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MlMediatorService } from '../../services';

@Component({
  selector: 'app-ml-sub2-component',
  templateUrl: './ml-sub2-component.component.html',
  styleUrls: ['./ml-sub2-component.component.scss']
})
export class MlSub2ComponentComponent implements OnInit, OnDestroy {
  public hello: string;
  public helloSubscription: Subscription;

  public constructor(private mediator: MlMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public ngOnDestroy(): void {
    console.log('MlSub2ComponentComponent destroyed');
  }
}
