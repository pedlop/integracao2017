import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamadaInicialComponent } from './camada-inicial/camada-inicial.component';

const routes: Routes = [
  {
    path: '',
    component: CamadaInicialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamadaInicialRoutingModule { }
