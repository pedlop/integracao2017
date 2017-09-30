import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-es-camada-inicial',
  templateUrl: './camada-inicial.component.html',
  styleUrls: ['./camada-inicial.component.scss']
})
export class CamadaInicialComponent implements OnInit {

  carregamento: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.carregamento = true;    
    setTimeout(
      time => {
        this.carregamento = false;
      }, 2000);
  }

  onClickSaibaMais() {
    this.router.navigate(['/es/disciplinas']);
  }

}
