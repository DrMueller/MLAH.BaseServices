import { Component, OnInit, OnDestroy } from '@angular/core';
import { GsMediatorService } from '../../services';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from 'projects/drmueller/ng-base-services/src/public_api';

@Component({
  selector: 'app-gs-sub1-component',
  templateUrl: './gs-sub1-component.component.html',
  styleUrls: ['./gs-sub1-component.component.scss']
})

@AutoUnsubscribe()
export class GsSub1ComponentComponent implements OnInit, OnDestroy {
  public hello: string;
  public helloSubscription: Subscription;

  public constructor(private mediator: GsMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public ngOnDestroy(): void {
    console.log('GsSub1ComponentComponent destroyed');
  }
}
