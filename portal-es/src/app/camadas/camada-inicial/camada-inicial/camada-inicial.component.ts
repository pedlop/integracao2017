import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-es-camada-inicial',
  templateUrl: './camada-inicial.component.html',
  styleUrls: ['./camada-inicial.component.scss']
})
export class CamadaInicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickSaibaMais() {
    this.router.navigate(['/es/disciplinas']);
  }

}
