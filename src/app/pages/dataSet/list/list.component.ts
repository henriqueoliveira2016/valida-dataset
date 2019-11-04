import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  logs: Observable<any>;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logs = this.logService.getAll();
  }

  delete(key: string) {
    this.logService.delete(key);
  }

  deleteAll() {
    this.logService.deleteAll();
  }


}
