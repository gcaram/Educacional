import { NgModule } from '@angular/core';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoNewComponent } from './aluno-new/aluno-new.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';
import { AlunoViewComponent } from './aluno-view/aluno-view.component';
import { Routes } from '@angular/router';


export const ALUNO_ROUTES: Routes = [
  { path: 'aluno', component: AlunoListComponent },
  { path: '../aluno/new', component: AlunoNewComponent },
  { path: '../aluno/edit/:id', component: AlunoEditComponent },
  { path: '../aluno/view/:id', component: AlunoViewComponent },
];
