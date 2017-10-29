import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CamadaMedialComponent } from './camada-medial/camada-medial.component';
import { CamadaMedialRoutingModule } from './camada-medial-routing.module';
import { CamadaMedialService } from './shared/camada-medial.service';
import { CarregandoModule } from './../../compartilhado/carregando/carregando.module';
import { MenuPesquisaModule } from './../../compartilhado/menu-pesquisa/menu-pesquisa.module';

@NgModule({
  declarations: [CamadaMedialComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CamadaMedialRoutingModule,
    CarregandoModule,
    MenuPesquisaModule
  ],
  exports: [CamadaMedialComponent],
  providers: [CamadaMedialService]
})
export class CamadaMedialModule { }
