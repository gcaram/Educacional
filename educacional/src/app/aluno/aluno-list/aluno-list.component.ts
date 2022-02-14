import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField, PoNavbarItem } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableCustomAction, PoPageDynamicTableCustomTableAction, PoPageDynamicTableField } from '@po-ui/ng-templates';

@Component({
  selector: 'edu-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  public items: Array<PoNavbarItem> = [];

  ngOnInit(): void {
    this.LoadItems();
  }

  public LoadItems() {
    this.items = [];

    this.items.push(/*{
      label: 'Coligada',
      link: "../company"
    },*/ {
      label: 'Alunos',
      link: "../aluno"
    }
    );
  }

  title: string = "Alunos";
  detailedaluno: any;
  apiAddress: string = "https://po-sample-api.herokuapp.com/v1/people";
  quickSearchWidth: number = 3;

  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
    { label: 'Imprimir', action: this.printPage.bind(this) }
  ];

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    //{ label: 'Details', action: this.onClickalunoDetail.bind(this) }
  ];

  printPage() {
    window.print();
  }

  readonly actions: PoPageDynamicTableActions = {
    detail: 'aluno/view/:id',
    edit: 'aluno/edit/:id',
    new: 'aluno/new',
    remove: false,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', label: 'Identificador', key: true },
    { property: 'name', label: 'Nome' },
    { property: 'birthdate', label: 'Dt Nascimento', type: 'date' },
  ];
}
