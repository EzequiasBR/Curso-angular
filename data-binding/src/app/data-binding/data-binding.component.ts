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

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
