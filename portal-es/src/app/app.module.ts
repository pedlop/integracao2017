import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { ToastModule } from 'portal-shared';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './compartilhado/pagina-nao-encontrada/pagina-nao-encontrada.component';

import { MenuPesquisaModule } from './compartilhado/menu-pesquisa/menu-pesquisa.module';
import { CamadaFinalModule } from './camadas/camada-final/camada-final.module';
import { CamadaMedialModule } from './camadas/camada-medial/camada-medial.module';
import { CamadaInicialModule } from './camadas/camada-inicial/camada-inicial.module';
import { RodapeModule } from './compartilhado/rodape/rodape.module';
import { SearchModule } from './compartilhado/search/search.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ToastModule.forRoot(),
    JsonpModule,
    SearchModule,
    CamadaInicialModule,
    CamadaMedialModule,
    CamadaFinalModule,
    RodapeModule,
    MenuPesquisaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
