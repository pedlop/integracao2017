import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SideMenuModule } from 'ng5-sidemenu/ng5-sidemenu';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LadoEsquerdoComponent } from '../../camadas/camada-final/menu-lateral/lado-esquerdo/lado-esquerdo.component';
import { MenuPesquisaCamadaFinalComponent } from './menu-pesquisa-camada-final.component';
import { AcessibilidadeModule } from './../acessibilidade/acessibilidade.module';

@NgModule({
  declarations: [MenuPesquisaCamadaFinalComponent, LadoEsquerdoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SideMenuModule,
    ModalModule.forRoot(),
    AcessibilidadeModule
  ],
  exports: [MenuPesquisaCamadaFinalComponent]
})
export class MenuPesquisaCamadaFinalModule { }
