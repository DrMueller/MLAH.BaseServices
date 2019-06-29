import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SicMediatorService implements OnDestroy {

  public _helloSubject = new Subject<string>();

  public get hello$(): Observable<string> {
    return this._helloSubject;
  }

  public sayHello(hello: string): void {
    this._helloSubject.next(hello);
  }

  public ngOnDestroy(): void {
    console.log('SicMediatorService destroyed');
  }
}
