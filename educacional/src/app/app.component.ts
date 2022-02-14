import { Component } from '@angular/core';
import { PoNavbarItem } from '@po-ui/ng-components';

@Component({
  selector: 'edu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Educacional AppComponent';

  public IsMenuCollapsed: boolean = false;

  public items: Array<PoNavbarItem> = [];

  ngOnInit(): void {
    this.LoadItems();
  }

  public LoadItems() {
    this.items = [];

    this.items.push({
      label: 'Alunos',
      link: "../aluno"
    }/*, {
      label: 'Usuários',
      link: "../user"
    }*/
    );
  }
}
