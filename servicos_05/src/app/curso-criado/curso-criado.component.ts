import { Component, OnInit } from '@angular/core';
import { CursoService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-criado',
  templateUrl: './curso-criado.component.html',
  styleUrls: ['./curso-criado.component.css']
})
export class CursoCriadoComponent implements OnInit {

  curso!: string;
  
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.emitirCursoCriado.subscribe(
     cursoCriado => this.curso = cursoCriado
    );
  }

}
