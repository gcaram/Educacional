import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'edu-aluno-new',
  templateUrl: './aluno-new.component.html',
  styleUrls: ['./aluno-new.component.css']
})
export class AlunoNewComponent implements OnInit {
  title = 'Novo Usuário';

public readonly actions: PoPageDynamicEditActions = {
  cancel: 'aluno',
  save: 'aluno',
};

public readonly breadcrumb: PoBreadcrumb = {
  items: [
    { label: 'Usuários', link: '/aluno' },
    { label: 'Novo' }
  ]
};

readonly fields: Array<PoPageDynamicEditField> = [
  { property: 'matricula', label: 'Matrícula', key: true },
  { property: 'name', label: 'Nome' },
  { property: 'endereco', label: 'Endereço' },
  { property: 'avatar', label: 'Avatar' },
  { property: 'createdAt', label: 'Dt Nascimento', type: 'date' },
];

constructor(private activatedRoute: ActivatedRoute) {}

ngOnInit() {
  this.activatedRoute.params.subscribe((params) => {
    this.title = params['id']? 'Inclusão de balancete' : this.title;
  });
}
}
