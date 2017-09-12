import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamadaMedialComponent } from './camada-medial/camada-medial.component';

const routes: Routes = [
  {
    path: 'es/disciplinas',
    component: CamadaMedialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamadaMedialRoutingModule { }
