import { CamadaFinalService } from './../shared/camada-final.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-es-camada-final',
  templateUrl: './camada-final.component.html',
  styleUrls: ['./camada-final.component.scss']
})
export class CamadaFinalComponent implements OnInit {

  collection: Array<any>;
  text: string;

  constructor(private finalService: CamadaFinalService) { }

  ngOnInit() {

    this.finalService.getInfo().subscribe(
      data => {
        this.collection = data.ppc;
        console.log(data);
        
      }
    );
  }

  onClickGetText(test) {
    return test.texto;
  }

  onClick(test) {
    this.text = test.texto;
  }

}
