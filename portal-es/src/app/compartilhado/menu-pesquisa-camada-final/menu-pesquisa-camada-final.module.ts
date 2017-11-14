import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LadoEsquerdoComponent } from '../../camadas/camada-final/menu-lateral/lado-esquerdo/lado-esquerdo.component';
import { MenuPesquisaCamadaFinalComponent } from './menu-pesquisa-camada-final.component';

@NgModule({
  declarations: [MenuPesquisaCamadaFinalComponent, LadoEsquerdoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SlideMenuModule,
    ModalModule.forRoot()
  ],
  exports: [MenuPesquisaCamadaFinalComponent]
})
export class MenuPesquisaCamadaFinalModule { }
