import { Contato } from './../shared/contato';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../shared/contato.service';
import { Observable } from 'rxjs';
import { ContatoDataService } from '../shared/contato-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contatos: Observable<any>;

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.contatos = this.contatoService.getAll();
  }

  delete(key: string) {
    this.contatoService.delete(key);
  }

  edit(contato: Contato, key: string) {
    this.contatoDataService.changeContato(contato, key);
  }
}