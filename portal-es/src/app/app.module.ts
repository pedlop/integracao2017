import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { ToastModule } from 'portal-shared';

import * as Raven from 'raven-js';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './compartilhado/pagina-nao-encontrada/pagina-nao-encontrada.component';

import { MenuPesquisaModule } from './compartilhado/menu-pesquisa/menu-pesquisa.module';
import { CamadaFinalModule } from './camadas/camada-final/camada-final.module';
import { CamadaMedialModule } from './camadas/camada-medial/camada-medial.module';
import { CamadaInicialModule } from './camadas/camada-inicial/camada-inicial.module';
import { RodapeModule } from './compartilhado/rodape/rodape.module';
import { SearchModule } from './compartilhado/search/search.module';
import { AppRoutingModule } from './app-routing.module';

Raven
.config('https://e7e76552137145c4a2686105dfdf8ac7@sentry.io/223950')
.install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
  }
}

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
  providers: [ { provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
