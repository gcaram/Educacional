import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'edu-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {
  title = 'Editando Aluno';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: 'aluno',
    save: 'aluno',
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Alunos', link: '/aluno' },
      { label: 'Edição' }
    ]
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'matricula', key: true, visible: false },
    { property: 'name', label: 'Nome',  },
    { property: 'createdAt',label: 'Dt Nascimento',  type: 'date' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params["matricula"]
      ? `Alterando o usuário ${params["matricula"]}`
      : this.title;
    });
  }
}
