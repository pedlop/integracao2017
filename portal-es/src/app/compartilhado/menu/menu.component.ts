import { Component, OnInit } from '@angular/core';

import { PesquisaService } from './../pesquisa/pesquisa.service';
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'ufg-es-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  resultados: Object;
  termoPesquisa$ = new Subject<string>();

  items: Array<string>;
  term$ = new Subject<string>();

  constructor(private pesquisaService: PesquisaService) {
    this.term$.subscribe(term => {
      this.search(term)
      console.log(term);
    
    });
    
  }

  ngOnInit() {
    this.pesquisaService.pesquisa(this.termoPesquisa$)
      .subscribe(data => {
        this.resultados = data.ppc;
        console.log(data);
        console.log(this.resultados);
        
      });
  }

  search(term: string) {
    this.pesquisaService.search(term)
    .subscribe(result => {
      this.items = result;
      console.log(result);
    });
    
  }

}
