import { CamadaFinalService } from './../../shared/camada-final.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-es-lado-esquerdo',
  templateUrl: './lado-esquerdo.component.html',
  styleUrls: ['./lado-esquerdo.component.scss']
})
export class LadoEsquerdoComponent implements OnInit {

  menuPrimario: any;
  listaPPC: any;

  constructor(private camadaFinalService: CamadaFinalService) { }

  ngOnInit() {
    this.camadaFinalService.estadoDoPpc.subscribe(
      data => {
        this.menuPrimario = data.ppc;
        console.log(data);
      }
    );
  }

}
