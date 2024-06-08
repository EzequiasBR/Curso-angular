import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursosComponent } from './criar-cursos.component';
import { CursoCriadoComponent } from '../curso-criado/curso-criado.component';



@NgModule({
  declarations: [
    CriarCursosComponent,
    CursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CriarCursosComponent]
})
export class CriarCursosModule { }
