import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-es-camada-inicial',
  templateUrl: './camada-inicial.component.html',
  styleUrls: ['./camada-inicial.component.scss']
})
export class CamadaInicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  accessibilityFont(operation){
    if (operation == '+'){
      document.body.style.zoom = "110%"
    }
    else if (operation == '=') {
      document.body.style.zoom = "100%";
    }
    else {
      document.body.style.zoom = "90%";
    }
  }

  accessibilityContrast() {
    
  }

  onClickSaibaMais() {
    this.router.navigate(['/es/disciplinas']);
  }

}
