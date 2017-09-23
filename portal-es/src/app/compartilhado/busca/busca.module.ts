import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaService } from './busca.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BuscaService]
})
export class MenuModule { }
