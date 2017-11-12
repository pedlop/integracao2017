import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CamadaFinalService } from './../../shared/camada-final.service';

@Component({
  selector: 'ufg-es-lado-direito',
  templateUrl: './lado-direito.component.html',
  styleUrls: ['./lado-direito.component.scss']
})
export class LadoDireitoComponent implements OnInit {

  menuItemsArray: any[];

  conteudoGeral: any;
  conteudo: any;
  menuSecundario: any;
  id: string;

  constructor(private finalService: CamadaFinalService, private route: ActivatedRoute,
              private router: Router) {
    // this.getChavesSecundarias();
    // console.log(this.route);
    this.menuItemsArray = menuChavesSecundarias;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        // console.log(this.route);

        this.getChavesSecundarias();
      }
    );
  }

  getChavesSecundarias() {
    this.finalService.estadoDoPpc.subscribe(
      data => {
        this.conteudoGeral = data.ppc; // array
        // console.log(this.conteudoGeral);

        const myArray = this.conteudoGeral.filter(
          chave => {
            // console.log(chave);
            return (chave.id === Number(this.id));
            // console.log(chave);
          }

        );

        // console.log(myArray);
        this.menuSecundario = myArray[0].chave_secundaria;
        // console.log(myArray);

        myArray.map(
          chaves => {
            chaves.chave_secundaria.map(
              sec => {
                menuChavesSecundarias.push({
                    title: sec.nome,
                    id: sec.id,
                    idPrimario: chaves.id
                  });
              }
            );
          }
        );

        // console.log(menuChavesSecundarias);


      }
    );
  }

  onMenuClose() {
    // console.log('menu closed');
  }

  onMenuOpen() {
    // console.log('menu Opened');
  }

  onItemSelect(item: any) {
    console.log(item);
    // this.router.navigate([`/es/detalhe/topico/${item.idPrimario}/#${item.id}`]);
    location.href = `/es/detalhe/topico/${item.idPrimario}#${item.id}`;
  }
}

export let menuChavesSecundarias = [];
