import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  pessoa:any = {
    nome: 'Ana',
    idade: 20,
    caracteristica: {
      corpo: 'normal',
      olhos: 'castanhos',
      cabelo:{
        tamanho: 'comprido',
        tipo: 'cacheado',
        cor: 'preto'
      },
      pele: 'pardo',
      altura: '1.68',
      labios: 'finos',
      orelhas: {
        tamanho: 'medio',
        tipo: 'normal',
      },
      nariz: 'curto'
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
