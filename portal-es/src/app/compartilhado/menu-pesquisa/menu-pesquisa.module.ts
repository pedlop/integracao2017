import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { MenuPesquisaComponent } from './menu-pesquisa.component';
import { AcessibilidadeModule } from '../acessibilidade/acessibilidade.module';

@NgModule({
  declarations: [MenuPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AcessibilidadeModule,
    ModalModule.forRoot()
  ],
  exports: [MenuPesquisaComponent]
})
export class MenuPesquisaModule { }
