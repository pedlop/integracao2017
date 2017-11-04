import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { comparaHoras } from './../shared/pesquisa-compara-horas';
import { comparaPublicacoes } from './../shared/pesquisa-compara-publicacoes';
import { grupos } from './../shared/pesquisa-grupos';
import { projetos } from './../shared/pesquisa-projetos';
import { single, multi } from './../shared/teste-paises';
import { disciplinas } from './../shared/curso-disciplinas';
import { itensMenuMedial } from '../shared/camada-medial-itens-menu';

@Component({
  selector: 'ufg-es-camada-medial',
  templateUrl: './camada-medial.component.html',
  styleUrls: ['./camada-medial.component.scss']
})
export class CamadaMedialComponent implements OnInit {

  medialItens: Array<any>;

  // database
  disciplinas: any[];

  // properties
  single: any[];
  multi: any[];

  // resolution
  view: any[] = [1400, 800];

  // options
  showLegend = true;

  //colors
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#0032FF']
  };

  // legend
  legendTitle =  "Áreas de Conhecimento";

  // properties
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  carregamento: boolean

  constructor(private router: Router) {
    window.scrollTo(0, 0);
    Object.assign(this, {single, multi});
    this.disciplinas = disciplinas;
    this.carregamento = true;
    this.medialItens = itensMenuMedial;
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
