import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursoService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    CriarCursosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
