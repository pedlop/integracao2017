import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { itensMenuInicial } from './../shared/camada-inicial-itens-menu';

@Component({
  selector: 'ufg-es-camada-inicial',
  templateUrl: './camada-inicial.component.html',
  styleUrls: ['./camada-inicial.component.scss']
})
export class CamadaInicialComponent implements OnInit {

  inicialItens: Array<any>;
  carregamento: boolean;

  constructor(private router: Router) {
    this.carregamento = true;
    this.inicialItens = itensMenuInicial;
  }

  ngOnInit() {

  }

  onClickSaibaMais() {
    this.router.navigate(['/es/disciplinas']);
  }

  pararCarregamento() {
    setTimeout(
      time => {
        this.carregamento = false;
      }, 1000);
  }

  erroCarregamento() {
    this.carregamento = false;
    this.router.navigate(['/sem-conexao']);
  }
}
