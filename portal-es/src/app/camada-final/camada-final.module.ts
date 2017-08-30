import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamadaFinalComponent } from './camada-final/camada-final.component';
import { CamadaFinalRoutingModule } from './camada-final-routing.module';
import { CamadaFinalService } from './shared/camada-final.service';

@NgModule({
  declarations: [CamadaFinalComponent],  
  imports: [
    CommonModule,
    CamadaFinalRoutingModule
  ],
  exports: [CamadaFinalComponent],
  providers: [CamadaFinalService]
})
export class CamadaFinalModule { }
