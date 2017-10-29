import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { MenuPesquisaComponent } from './menu-pesquisa.component';

@NgModule({
  declarations: [MenuPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports: [MenuPesquisaComponent]
})
export class MenuPesquisaCamadaFinalModule { }
