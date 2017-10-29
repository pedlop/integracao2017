import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { ToastModule } from 'portal-shared';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './compartilhado/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SemConexaoComponent } from './compartilhado/sem-conexao/sem-conexao.component';

import { CamadaFinalModule } from './camadas/camada-final/camada-final.module';
import { MenuPesquisaCamadaFinalModule } from './camadas/camada-final/menu-pesquisa/menu-pesquisa.module';
import { CamadaMedialModule } from './camadas/camada-medial/camada-medial.module';
import { MenuPesquisaCamadaMediaModule } from './camadas/camada-medial/menu-pesquisa/menu-pesquisa.module';
import { CamadaInicialModule } from './camadas/camada-inicial/camada-inicial.module';
import { MenuPesquisaCamadaInicialModule } from './camadas/camada-inicial/menu-pesquisa/menu-pesquisa.module';
import { RodapeModule } from './compartilhado/rodape/rodape.module';
import { SearchModule } from './compartilhado/search/search.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    SemConexaoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ToastModule.forRoot(),
    JsonpModule,
    SearchModule,
    CamadaInicialModule,
    MenuPesquisaCamadaInicialModule,
    CamadaMedialModule,
    MenuPesquisaCamadaMediaModule,
    CamadaFinalModule,
    MenuPesquisaCamadaFinalModule,
    RodapeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
