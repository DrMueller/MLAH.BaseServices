import { Component, OnInit, OnDestroy } from '@angular/core';
import { SicMediatorService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sic-sub1-component',
  templateUrl: './sic-sub1-component.component.html',
  styleUrls: ['./sic-sub1-component.component.scss']
})
export class SicSub1ComponentComponent implements OnInit, OnDestroy {
  public hello: string;
  public helloSubscription: Subscription;

  public constructor(private mediator: SicMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public ngOnDestroy(): void {
    console.log('SicSub1ComponentComponent destroyed');
  }


}
