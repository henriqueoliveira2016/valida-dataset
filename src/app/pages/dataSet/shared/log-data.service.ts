import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {
  private logSource = new BehaviorSubject({ log: null, key: '' });
  currentLog = this.logSource.asObservable();

  constructor() { }

  changeLog(log: Log, key: string) {
    this.logSource.next({ log: log, key: key });
  }

}