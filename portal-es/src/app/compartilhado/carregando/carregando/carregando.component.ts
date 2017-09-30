import { Component, OnInit } from '@angular/core';
import { base } from './../shared/logo-base64';

@Component({
  selector: 'ufg-es-carregando',
  templateUrl: './carregando.component.html',
  styleUrls: ['./carregando.component.scss']
})
export class CarregandoComponent implements OnInit {

  base: any;

  constructor() {
    this.base = base;
  }

  ngOnInit() {
  }

}
