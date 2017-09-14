import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaService } from './pesquisa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PesquisaService]
})
export class PesquisaModule { }
