import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ufg-es-sem-conexao',
  templateUrl: './sem-conexao.component.html',
  styleUrls: ['./sem-conexao.component.scss']
})
export class SemConexaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
