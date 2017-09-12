import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaComponent } from './busca.component';

@NgModule({
  declarations: [BuscaComponent],  
  imports: [
    CommonModule
  ],
  exports: [BuscaComponent]
})
export class MenuModule { }
