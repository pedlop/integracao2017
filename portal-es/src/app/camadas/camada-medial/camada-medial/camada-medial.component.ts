import { Component, OnInit } from '@angular/core';

import { single, multi } from './../shared/teste-paises';
import { horas } from './../shared/curso-horas';

@Component({
  selector: 'ufg-es-camada-medial',
  templateUrl: './camada-medial.component.html',
  styleUrls: ['./camada-medial.component.scss']
})
export class CamadaMedialComponent implements OnInit {

  data: any;

  single: any[];
  multi: any[];

  horas: any[];

  view: any[] = [500, 200];

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Horas';
  showYAxisLabel = true;
  yAxisLabel = 'Atividades';

  // options
  showLegend = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    window.scrollTo(0, 0);
    Object.assign(this, {single, multi});
    this.horas = horas;
    this.data = [
      {
      'nome': 'Matemática',
      'info': [
        {
          'ano': '2010',
          'valor': 799
        },
        {
          'ano': '2011',
          'valor': 788
        }
      ]
    },
    {
      'nome': 'Computaçao',
      'info': [
        {
          'ano': '2010',
          'valor': 907
        },
        {
          'ano': '2011',
          'valor': 534
        }
      ]
    }
  ];
  }

  ngOnInit() {


  }

  onSelect(event) {
    console.log(event);
  }

}
