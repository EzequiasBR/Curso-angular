import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos/cursos.service';

@Component({
  selector: 'criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  // providers: [CursoService]
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

}
