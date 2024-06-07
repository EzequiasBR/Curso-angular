import { Injectable } from "@angular/core";

@Injectable()
export class CursoService {

  private cursos: string[] =  ["Angular","Java","Bootstrap"];
  // constructor(parameters){ }
  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
  
}
