import { Component, OnInit, OnDestroy } from '@angular/core';
import { SicMediatorService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sic-sub2-component',
  templateUrl: './sic-sub2-component.component.html',
  styleUrls: ['./sic-sub2-component.component.scss']
})
export class SicSub2ComponentComponent implements OnInit, OnDestroy {
  public hello: string;
  public helloSubscription: Subscription;

  public constructor(private mediator: SicMediatorService) { }

  public ngOnInit(): void {
    this.helloSubscription = this.mediator.hello$.subscribe(hello => {
      this.hello = hello;
    });
  }

  public ngOnDestroy(): void {
    console.log('SicSub2ComponentComponent destroyed');
  }

}
