import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CamadaMedialComponent } from './camada-medial/camada-medial.component';
import { CamadaMedialRoutingModule } from './camada-medial-routing.module';
import { CamadaMedialService } from './shared/camada-medial.service';
import { MenuPesquisaCamadaMediaModule } from './menu-pesquisa/menu-pesquisa.module';
import { CarregandoModule } from './../../compartilhado/carregando/carregando.module';

@NgModule({
  declarations: [CamadaMedialComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CamadaMedialRoutingModule,
    MenuPesquisaCamadaMediaModule,
    CarregandoModule
  ],
  exports: [CamadaMedialComponent],
  providers: [CamadaMedialService]
})
export class CamadaMedialModule { }
