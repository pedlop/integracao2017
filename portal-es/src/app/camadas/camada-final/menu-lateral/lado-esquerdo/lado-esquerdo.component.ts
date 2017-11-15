import { ActivatedRoute, Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CamadaFinalService } from './../../shared/camada-final.service';

@Component({
  selector: 'ufg-es-lado-esquerdo',
  templateUrl: './lado-esquerdo.component.html',
  styleUrls: ['./lado-esquerdo.component.scss']
})
export class LadoEsquerdoComponent implements OnInit {
  menuItemsArray: any[];
  chavesPrimarias: any;

  menuPrimario: any;
  listaPPC: any;

  constructor(private camadaFinalService: CamadaFinalService, private router: Router) {
    this.menuItemsArray = menuChavesPrimarias;
  }

  ngOnInit() {
    this.camadaFinalService.estadoDoPpc.subscribe(
      data => {
        this.menuPrimario = data.ppc;
        this.chavesPrimarias = this.menuPrimario.map(
          chaves => {
            menuChavesPrimarias.push({
              title: chaves.chave_primaria,
              id: chaves.id
            });
          }
        );
      }
    );
  }

  onMenuClose() {

   }

   onMenuOpen() {

   }

   onItemSelect(item: any) {
    this.router.navigate(['/es/detalhe/topico', item.id]);
   }

}

export let menuChavesPrimarias = [];
