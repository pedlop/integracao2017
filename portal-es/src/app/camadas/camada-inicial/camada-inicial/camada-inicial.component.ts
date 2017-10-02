import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-es-camada-inicial',
  templateUrl: './camada-inicial.component.html',
  styleUrls: ['./camada-inicial.component.scss']
})
export class CamadaInicialComponent implements OnInit {

  carregamento: boolean;

  constructor(private router: Router) {
    this.carregamento = true;           
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

  erroCarregamento(event) {
    this.carregamento = false;
    this.router.navigate(['/sem-conexao']);
  }
}
