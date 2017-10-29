import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamadaInicialComponent } from './camada-inicial/camada-inicial.component';
import { CamadaInicialRoutingModule } from './camada-inicial-routing.module';
import { CamadaInicialService } from './shared/camada-inicial.service';
import { MenuPesquisaCamadaInicialModule } from './menu-pesquisa/menu-pesquisa.module';
import { CarregandoModule } from './../../compartilhado/carregando/carregando.module';

@NgModule({
  declarations: [CamadaInicialComponent],
  imports: [
    CommonModule,
    CamadaInicialRoutingModule,
    MenuPesquisaCamadaInicialModule,
    CarregandoModule
  ],
  exports: [CamadaInicialComponent],
  providers: [CamadaInicialService]
})
export class CamadaInicialModule { }
