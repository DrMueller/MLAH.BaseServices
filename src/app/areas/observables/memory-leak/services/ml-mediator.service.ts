import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlMediatorService {

  public _helloSubject = new Subject<string>();

  public get hello$(): Observable<string> {
    return this._helloSubject;
  }

  public sayHello(hello: string): void {
    this._helloSubject.next(hello);
  }
}
