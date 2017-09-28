import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamadaInicialComponent } from './camada-inicial/camada-inicial.component';
import { CamadaInicialRoutingModule } from './camada-inicial-routing.module';
import { CamadaInicialService } from './shared/camada-inicial.service';
import { MenuPesquisaModule } from './../../compartilhado/menu-pesquisa/menu-pesquisa.module';

@NgModule({
  declarations: [CamadaInicialComponent],
  imports: [
    CommonModule,
    CamadaInicialRoutingModule,
    MenuPesquisaModule
  ],
  exports: [CamadaInicialComponent],
  providers: [CamadaInicialService]
})
export class CamadaInicialModule { }
