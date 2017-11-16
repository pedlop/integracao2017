import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuModule } from 'ng5-sidemenu/ng5-sidemenu';

import { CamadaFinalComponent } from './camada-final/camada-final.component';
import { CamadaFinalRoutingModule } from './camada-final-routing.module';
import { CamadaFinalService } from './shared/camada-final.service';
import { TopicoComponent } from './topico/topico.component';
import { LadoDireitoComponent } from './menu-lateral/lado-direito/lado-direito.component';
import { CarregandoModule } from './../../compartilhado/carregando/carregando.module';
import { MenuPesquisaCamadaFinalModule } from './../../compartilhado/menu-pesquisa-camada-final/menu-pesquisa-camada-final.module';

@NgModule({
  declarations: [
    CamadaFinalComponent,
    TopicoComponent,
    LadoDireitoComponent
  ],
  imports: [
    CommonModule,
    CamadaFinalRoutingModule,
    CarregandoModule,
    SideMenuModule,
    MenuPesquisaCamadaFinalModule
  ],
  exports: [CamadaFinalComponent],
  providers: [CamadaFinalService]
})
export class CamadaFinalModule { }
