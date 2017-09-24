import { CamadaFinalService } from './../../camadas/camada-final/shared/camada-final.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Subject } from "rxjs/Subject";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: 'ufg-es-menu-pesquisa',
  templateUrl: './menu-pesquisa.component.html',
  styleUrls: ['./menu-pesquisa.component.scss']
})
export class MenuPesquisaComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  
  resultados: any;
  termo: string;
  finalResults: Array<string> = this.finalResults || [];
  resultId: number;

  results: any;

  constructor(private finalService: CamadaFinalService) {
    this.termo = '';
    this.results = [];
  }

  ngOnInit() {
    
  }

  onSearchTerm() {
    this.finalResults = [];
    this.results = [];
    this.showChildModal();    
    this.finalService.estadoDoPpc
    .subscribe(data => {
      // this.resultados = data.ppc;
      this.resultados = data.ppc;
      // console.log(data);
      
      let result = data.ppc.filter(
        chave => {
          // console.log(chave);
          if(chave.chave_primaria.length === this.termo.length && !Array.isArray(chave.chave_primaria)) {
            // console.log('if');
            return (chave.chave_primaria.toUpperCase().localeCompare(this.termo.toUpperCase()) === 0);
          } else if (chave.chave_primaria.length > this.termo.length && !Array.isArray(chave.chave_primaria)) {
            // console.log('else if');
            return (chave.chave_primaria.toUpperCase().substring(0, this.termo.length).localeCompare(this.termo.toUpperCase()) === 0);
          } 
        }
      );
      // console.log(result);    
      result.map(
        chavesPrimarias => {
          this.finalResults.push(chavesPrimarias.chave_primaria);
          this.resultId = chavesPrimarias.id;
          this.results.push({
            id: this.resultId,
            retorno: chavesPrimarias.chave_primaria
          });
        }
      );

      let pp = data.ppc.filter(
        res => {
          // console.log('entrouuu,', res);
          this.resultId = res.id;
          let tt = res.chave_especial.filter(
            esp => {
            // console.log('opesaaaad especial', esp);    
              if (esp.length === this.termo.length) {
                if (esp.toUpperCase().localeCompare(this.termo.toUpperCase()) === 0) {
                  return true;
                }
              } else if (esp.length > this.termo.length) {
                if (esp.toUpperCase().substring(0, this.termo.length).localeCompare(this.termo.toUpperCase()) === 0) {
                  return true;
                }
              }
            }  
          );
          // console.log('tt'); 
          tt.map(
            chavesEspeciais => {
              // console.log('kk',kk);
              this.finalResults.push(chavesEspeciais);
              this.results.push({
                id: this.resultId,
                retorno: chavesEspeciais
              });
            }
          ); 
          // console.log('chaves especiais', this.chavesEspeciais);
        }
      );
    });
    // console.log(this.finalResults);
    // console.log(this.results);
  }

  keyDownFunction(event) {
    if (this.termo.length === 0) {
      console.log('zerado');
    } else {
      event.keyCode == 13 ? this.onSearchTerm() : '';
    }
  }

   public showChildModal() {
     this.childModal.show();
   }
  
   public hideChildModal() {
     this.childModal.hide();
   }
}
