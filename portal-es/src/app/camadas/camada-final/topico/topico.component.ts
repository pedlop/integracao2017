import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CamadaFinalService } from './../shared/camada-final.service';

@Component({
  selector: 'ufg-es-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.scss']
})
export class TopicoComponent implements OnInit, OnDestroy {
  carregamento: boolean;
  titulo: any;
  chavesSecundarias: any;

  id: string;
  inscricao: Subscription;

  ppc: any;
  meuTexto: any;

  constructor(private route: ActivatedRoute, private finalService: CamadaFinalService,
              private router: Router) { }

  ngOnInit() {
    this.carregamento = true;
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.getTextoPrimario();
        setTimeout(
          time => {
            this.carregamento = false;
          }, 2000);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  getTextoPrimario() {
    this.finalService.estadoDoPpc.subscribe(
      data => {
        this.ppc = data.ppc;

        const myArray = this.ppc.filter(
          item => {
            return (item.id === Number(this.id));
          }
        );

        this.titulo = myArray[0].chave_primaria;
        this.meuTexto = myArray[0].texto;

        this.getTextoSecundario(myArray);
      },
      err => {
        console.log('Erro', err);
      }
    );
  }

  getTextoSecundario(myArray) {
    this.chavesSecundarias = myArray[0].chave_secundaria;
  }

  getPrimeiroSubtexto() {

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
