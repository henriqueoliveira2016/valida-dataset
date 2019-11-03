import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Log } from './log';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private db: AngularFireDatabase) {

  }

  insert(log: Log) {
    this.db.list('log').push(log)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  getAll() {
    return this.db.list('log')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`log/${key}`).remove();
  }

  deleteAll() {
    this.db.object(`log`).remove();
  }

}
