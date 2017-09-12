import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodapeComponent } from './rodape.component';

@NgModule({
  declarations: [RodapeComponent],  
  imports: [
    CommonModule
  ],
  exports: [RodapeComponent]
})
export class RodapeModule { }
