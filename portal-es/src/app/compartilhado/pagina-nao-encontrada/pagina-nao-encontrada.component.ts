import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ufg-es-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.scss']
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickGoHome() {
    this.router.navigate(['/']);
  }

}
