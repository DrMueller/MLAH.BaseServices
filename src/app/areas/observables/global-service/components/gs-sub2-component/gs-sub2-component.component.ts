import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GsMediatorService } from '../../services';
import { AutoUnsubscribe } from 'projects/drmueller/ng-base-services/src/public_api';

@Component({
  selector: 'app-gs-sub2-component',
  templateUrl: './gs-sub2-component.component.html',
  styleUrls: ['./gs-sub2-component.component.scss']
})

@AutoUnsubscribe('helloSubscription')
export class GsSub2ComponentComponent implements OnInit, OnDestroy {
  public hello: string;
  public helloSubscription: Subscription;

  public constructor(private mediator: GsMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public ngOnDestroy(): void {
    console.log('GsSub2ComponentComponent destroyed');
  }
}
