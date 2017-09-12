import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './compartilhado/pagina-nao-encontrada/pagina-nao-encontrada.component';

import { MenuModule } from './compartilhado/menu/menu.module';
import { CamadaFinalModule } from './camada-final/camada-final.module';
import { CamadaMedialModule } from './camada-medial/camada-medial.module';
import { CamadaInicialModule } from './camada-inicial/camada-inicial.module';
import { RodapeModule } from './compartilhado/rodape/rodape.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    CamadaInicialModule,
    CamadaMedialModule,
    CamadaFinalModule,
    RodapeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
