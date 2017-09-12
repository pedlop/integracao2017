import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamadaInicialComponent } from './camada-inicial/camada-inicial.component';
import { CamadaInicialRoutingModule } from './camada-inicial-routing.module';
import { CamadaInicialService } from './shared/camada-inicial.service';

@NgModule({
  declarations: [CamadaInicialComponent],  
  imports: [
    CommonModule,
    CamadaInicialRoutingModule
  ],
  exports: [CamadaInicialComponent],
  providers: [CamadaInicialService]
})
export class CamadaInicialModule { }
