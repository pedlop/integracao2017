import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { comparaHoras } from './../shared/pesquisa-compara-horas';
import { comparaPublicacoes } from './../shared/pesquisa-compara-publicacoes';
import { grupos } from './../shared/pesquisa-grupos';
import { projetos } from './../shared/pesquisa-projetos';
import { single, multi } from './../shared/teste-paises';
import { disciplinas } from './../shared/curso-disciplinas';
import { atividades } from './../shared/atividades-desenvolvimento';
import { itensMenuMedial } from '../shared/camada-medial-itens-menu';

@Component({
  selector: 'ufg-es-camada-medial',
  templateUrl: './camada-medial.component.html',
  styleUrls: ['./camada-medial.component.scss']
})
export class CamadaMedialComponent implements OnInit {

  single: any[];
  multi: any[];

  disciplinas: any[];
  atividades: any[];
  projetos: any [];
  grupos: any[];
  comparaPublicacoes: any[];
  comparaHoras: any[];

  view: any[] = [800, 400];

  viewer: any[] = [1400, 800];
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Anos';
  showYAxisLabel = true;
  yAxisLabel = 'Horas Trabalhadas';

  XAxisLabel = 'Atividades';
  YAxisLabel = 'Quantidade';


  xLabel: 'Anos';
  yLabel: 'Publicações';

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#01DFD7', '#0032FF', '#B40486']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  carregamento: boolean;

  constructor(private router: Router) {
    window.scrollTo(0, 0);
    Object.assign(this, {single, multi});
    this.disciplinas = disciplinas;
    this.atividades = atividades;
    this.projetos = projetos;
    this.grupos = grupos;
    this.comparaPublicacoes = comparaPublicacoes;
    this.comparaHoras = comparaHoras;
    this.carregamento = true;
  }

  ngOnInit() {


  }

  onSelect(event) {
    console.log(event);
  }

  onClickSaibaMais() {
    this.router.navigate(['/es/detalhe/topico/1']);
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
