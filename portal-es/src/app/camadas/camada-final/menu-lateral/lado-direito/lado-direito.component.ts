import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CamadaFinalService } from './../../shared/camada-final.service';

@Component({
  selector: 'ufg-es-lado-direito',
  templateUrl: './lado-direito.component.html',
  styleUrls: ['./lado-direito.component.scss']
})
export class LadoDireitoComponent implements OnInit {

  conteudoGeral: any;
  conteudo: any;
  menuSecundario: any;
  id: string;

  constructor(private finalService: CamadaFinalService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.getChavesSecundarias();
      }
    );
  }

  getChavesSecundarias() {
    this.finalService.estadoDoPpc.subscribe(
      data => {
        this.conteudoGeral = data.ppc; // array
        const myArray = this.conteudoGeral.filter(
          chave => {
            return (chave.id === Number(this.id));
          }
        );
        this.menuSecundario = myArray[0].chave_secundaria;
      }
    );
  }
}
