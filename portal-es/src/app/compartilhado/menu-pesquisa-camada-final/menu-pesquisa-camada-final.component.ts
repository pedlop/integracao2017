import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { CamadaFinalService } from './../../camadas/camada-final/shared/camada-final.service';

@Component({
  selector: 'ufg-es-menu-pesquisa-camada-final',
  templateUrl: './menu-pesquisa-camada-final.component.html',
  styleUrls: ['./menu-pesquisa-camada-final.component.scss']
})
export class MenuPesquisaCamadaFinalComponent implements OnInit {
  @Input() itensMenu: Array<any>;
  @Input() url: string;

  @ViewChild('childModal') public childModal: ModalDirective;

  dadosPPC: any;
  termo: string;
  results: any;
  resultId: number;

  normalizadas: any;

  constructor(private finalService: CamadaFinalService) {
    this.termo = '';
    this.results = [];
    this. normalizadas = [];
  }

  ngOnInit() {

  }

  onSearchTerm() {
    this.results = [];
    this.showChildModal();
    this.finalService.estadoDoPpc
    .subscribe(data => {
      this.dadosPPC = data.ppc;

      this.buscaChavePrimaria(this.dadosPPC);
      this.buscaChaveSecundaria(this.dadosPPC);
      this.buscaChaveEspecial(this.dadosPPC);
    });
  }

  keyDownFunction(event) {
    if (this.termo.length === 0) {
    } else {
      event.keyCode === 13 ? this.onSearchTerm() : this.vazio();
    }
  }

   public showChildModal() {
     this.childModal.show();
   }

   public hideChildModal() {
     this.childModal.hide();
   }

   /**
    * Realiza a Busca nas Chaves Primarias
    *
    * @private
    * @param {any} dados - Dados contidos no arquivo JSON do PPC
    *
    * Alimenta o array 'results' com:
    *   {number} id - id da Chave Primaria
    *   {string} retorno - nome da Chave Secundaria
    *   {number} subId - id da Chave Secundaria fixo como: 1
    * @memberOf MenuPesquisaComponent
    */
   private buscaChavePrimaria(dados) {
    const listaPalavrasPrimarias = dados.filter(
      chave => {
        const chavePrimariaModificada = this.alteraCaracteresEspeciais(chave.chave_primaria);
        if (chavePrimariaModificada.length === this.termo.length && !Array.isArray(chavePrimariaModificada)) {
          return (chavePrimariaModificada.toUpperCase().localeCompare(this.termo.toUpperCase()) === 0);
        } else if (chavePrimariaModificada.length > this.termo.length && !Array.isArray(chavePrimariaModificada)) {
          return (chavePrimariaModificada.toUpperCase().substring(0, this.termo.length).localeCompare(this.termo.toUpperCase()) === 0);
        }
      }
    );
    listaPalavrasPrimarias.map(
      chavesPrimarias => {
        this.resultId = chavesPrimarias.id;
        this.results.push({
          id: this.resultId,
          retorno: chavesPrimarias.chave_primaria,
          subId: 1
        });
      }
    );
   }

   /**
    * Realiza a Busca nas Chaves Secundarias
    *
    * @private
    * @param {any} dados - Dados contidos no arquivo JSON do PPC
    *
    * Alimenta o array 'results' com:
    *   {number} id - id da Chave Primaria
    *   {string} retorno - nome da Chave Secundaria
    *   {number} subId - id da Chave Secundaria
    * @memberOf MenuPesquisaComponent
    */
   private buscaChaveSecundaria(dados) {
    dados.filter(
      chave => {
        this.resultId = chave.id;

        const listaPalavrasSecundarias = chave.chave_secundaria.filter(
          chaveSec => {
            const chaveSecundariaModificada = this.alteraCaracteresEspeciais(chaveSec.nome);
            if (chaveSecundariaModificada.length === this.termo.length) {
              return (chaveSecundariaModificada.toUpperCase().localeCompare(this.termo.toUpperCase()) === 0);
            } else if (chaveSecundariaModificada.length > this.termo.length) {
              return (chaveSecundariaModificada.toUpperCase().substring(0, this.termo.length).localeCompare(this.termo.toUpperCase()) === 0);
            }
          }
        );
        listaPalavrasSecundarias.map(
          chavesSecundarias => {
            const resultSecId = chavesSecundarias.id;
            this.results.push({
              id: this.resultId,
              retorno: chavesSecundarias.nome,
              subId: resultSecId
            });
          }
        );
      }
    );
   }

   /**
    * Realiza a Busca nas Chaves Especiais
    *
    * @private
    * @param {any} dados - Dados contidos no arquivo JSON do PPC
    *
    * Alimenta o array 'results' com:
    *   {number} id - id da Chave Primaria
    *   {string} retorno - nome da Chave Secundaria
    *   {number} subId - id da Chave Secundaria fixo como: 1
    * @memberOf MenuPesquisaComponent
    */
   private buscaChaveEspecial(dados) {
    dados.filter(
      res => {
        this.resultId = res.id;
        const listaPalavrasEspeciais = res.chave_especial.filter(
          esp => {
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
        listaPalavrasEspeciais.map(
          chavesEspeciais => {
            this.results.push({
              id: this.resultId,
              retorno: chavesEspeciais,
              subId: 1
            });
          }
        );
      }
    );
   }

   /**
    * Pega cada string e substitui de acordo com as regras definidas no método .replace
    *
    * @private
    * @param {string} palavra - String a ser substituida - {chave_primaria ou chave_secundaria.nome}
    * @returns Cada palavra modificada
    *
    * @memberOf MenuPesquisaComponent
    */
   private alteraCaracteresEspeciais(palavra: string) {
      palavra = palavra.replace(/[ÀÁÂÃÄÅ]/, 'A');
      palavra = palavra.replace(/[àâãäå]/, 'a');
      palavra = palavra.replace(/[á]/, 'a');
      palavra = palavra.replace(/(\snão\s)/, ' nao ');
      palavra = palavra.replace(/[ÈÉÊË]/, 'E');
      palavra = palavra.replace(/[Ç]/, 'C');
      palavra = palavra.replace(/[ç]/, 'c');
      palavra = palavra.replace(/[ÚÙ]/, 'U');
      palavra = palavra.replace(/[úù]/, 'u');
      palavra = palavra.replace(/[ÍÌ]/, 'I');
      palavra = palavra.replace(/[íì]/, 'i');
      palavra = palavra.replace(/[ÓÒ]/, 'O');
      palavra = palavra.replace(/[óò]/, 'o');
      palavra = palavra.replace('(', '');
      palavra = palavra.replace(')', '');
      palavra = palavra.replace(/(\sde\s)|(\sda\s)|(\se\s)|(\s-\s)/g, ' ');

      return palavra.replace(/[^a-z0-9]/gi, ' ');
   }

    private vazio() {
        return '';
    }
}
