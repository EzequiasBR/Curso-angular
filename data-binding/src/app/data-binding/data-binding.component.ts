import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com.br/400/200/nature/?2';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: any;

  nomeDoCurso:string = 'Angular';

  isMouseOver: boolean = false;

valorInicial = 15;

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('botão clicado')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
     console.log(evento);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
