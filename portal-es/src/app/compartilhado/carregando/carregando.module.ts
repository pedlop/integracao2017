import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarregandoComponent } from './carregando/carregando.component';

@NgModule({
  declarations: [CarregandoComponent],
  imports: [
    CommonModule
  ],
  exports: [CarregandoComponent]
})
export class CarregandoModule { }
