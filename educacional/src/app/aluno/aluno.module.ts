import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALUNO_ROUTES } from './aluno-routing.module';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

import { AlunoNewComponent } from './aluno-new/aluno-new.component';
import { AlunoViewComponent } from './aluno-view/aluno-view.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';



@NgModule({
  declarations: [
    AlunoEditComponent,
    AlunoListComponent,
    AlunoViewComponent,
    AlunoNewComponent
  ],
  imports: [
    CommonModule,
    PoTemplatesModule,
    PoModule,
    RouterModule.forChild(ALUNO_ROUTES)
  ]
})
export class AlunoModule { }
