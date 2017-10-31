import { ActivatedRoute, Routes, Router } from '@angular/router';
import { CamadaFinalService } from './../../shared/camada-final.service';
import { Component, OnInit } from '@angular/core';

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
        // console.log(data);
        this.chavesPrimarias = this.menuPrimario.map(
          chaves => {
            // console.log(chaves);
            menuChavesPrimarias.push({
              title: chaves.chave_primaria,
              // link: `${location.origin}/es/detalhe/topico/${chaves.id}`
              id: chaves.id
            });
          }
        );
        // menuChavesPrimarias.push(this.chavesPrimarias);
      }
    );
  }

  onMenuClose() {
    console.log('menu closed');
   }
   
   onMenuOpen() {
    console.log('menu Opened');
   }
   
   onItemSelect(item: any) {
    console.log(item);
    this.router.navigate(['/es/detalhe/topico', item.id]);
   }

}

export let menuChavesPrimarias = [];
