import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamadaFinalComponent } from './camada-final/camada-final.component';

const routes: Routes = [
  {
    path: 'es/detalhe',
    component: CamadaFinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamadaFinalRoutingModule { }
