import { Component, OnInit } from '@angular/core';
import { base } from './../shared/logo-base64';

@Component({
  selector: 'ufg-es-carregando',
  templateUrl: './carregando.component.html',
  styleUrls: ['./carregando.component.scss']
})
export class CarregandoComponent implements OnInit {

  base64: string;

  constructor() {
    this.base64 = base;
  }

  ngOnInit() {
  }

}
