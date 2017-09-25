import { ToastService } from 'portal-shared';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CamadaFinalService } from './../shared/camada-final.service';

@Component({
  selector: 'ufg-es-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.scss']
})
export class TopicoComponent implements OnInit {
  titulo: any;
  chavesSecundarias: any;

  id: string;
  inscricao: Subscription;

  ppc: any;
  meuTexto: any;

  constructor(private route: ActivatedRoute, private finalService: CamadaFinalService,
  private toast: ToastService) {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
    // this.id = '0';
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        // console.log(this.id);
        this.getTextoPrimario();
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

        // console.log(myArray);

        this.titulo = myArray[0].chave_primaria;
        this.meuTexto = myArray[0].texto;
        // console.log(this.meuTexto);

        this.getTextoSecundario(myArray);
      }
    );
  }

  getTextoSecundario(myArray) {
    this.chavesSecundarias = myArray[0].chave_secundaria;
    // console.log(this.chavesSecundarias);
    this.toast.sucesso('Deu CERTO', 'AEE');
  }

  getPrimeiroSubtexto() {
    console.log(this.chavesSecundarias);    
  }
  
}
