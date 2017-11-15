import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'portal-shared';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './compartilhado/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SemConexaoComponent } from './compartilhado/sem-conexao/sem-conexao.component';

import { MenuPesquisaModule } from './compartilhado/menu-pesquisa/menu-pesquisa.module';
import { CamadaFinalModule } from './camadas/camada-final/camada-final.module';
import { CamadaMedialModule } from './camadas/camada-medial/camada-medial.module';
import { CamadaInicialModule } from './camadas/camada-inicial/camada-inicial.module';
import { RodapeModule } from './compartilhado/rodape/rodape.module';
import { AppRoutingModule } from './app-routing.module';
import { AcessibilidadeModule } from './compartilhado/acessibilidade/acessibilidade.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    SemConexaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastModule.forRoot(),
    CamadaInicialModule,
    CamadaMedialModule,
    CamadaFinalModule,
    RodapeModule,
    MenuPesquisaModule,
    AcessibilidadeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
