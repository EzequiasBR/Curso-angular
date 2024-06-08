import { Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class CursoService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] =  ["Angular","Java","Bootstrap"];
  // constructor(parameters){ }
  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoService.criouNovoCurso.emit(curso)
  }
}
