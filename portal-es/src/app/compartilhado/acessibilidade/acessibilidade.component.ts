import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'ufg-es-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})
export class AcessibilidadeComponent implements OnInit {

  zoom: number;
  click: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.zoom = 100;
    this.click = false;
  }

  ngOnInit() {
  }

  accessibilityContrast() {
    this.click = !this.click;
    if (this.click) {
      this.renderer.setElementStyle(document.body, 'background-color', 'black');
      this.renderer.setElementStyle(document.body, 'color', 'white');
    } else {
      this.renderer.setElementStyle(document.body, 'background-color', 'white');
      this.renderer.setElementStyle(document.body, 'color', 'black');
    }    
  }

  accessibilityFont(operation) {
    if (operation === '+') {
      this.zoom = this.zoom + 10;
      document.body.style.zoom = `${this.zoom}%`;
    }
    else if (operation === '=') {
      this.zoom = 100;
      document.body.style.zoom = `${this.zoom}%`;
    }
    else {
      this.zoom = this.zoom - 10;
      document.body.style.zoom = `${this.zoom}%`;
    }
  }

}
