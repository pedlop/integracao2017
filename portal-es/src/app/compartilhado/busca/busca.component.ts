import { Component, OnInit } from '@angular/core';
import {Ibusca} from '../Ibusca/Ibusca.component';

@Component({
  selector: 'ufg-es-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})

export class BuscaComponent implements Ibusca {

  constructor() { }

  buscar(){}

}