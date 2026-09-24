import { Component } from '@angular/core';
import { Header } from './src/header/header';
import { UserList } from './src/user-list/user-list';
import { Sekcja2Form } from './src/sekcja2-form/sekcja2-form';

@Component({
  selector: 'app-sekcja-2',
  imports: [Header, UserList, Sekcja2Form],
  template: `
    <div class="sekcja-2">
      <app-header />
      <hr />
      <app-user-list />
      <hr />
      <app-sekcja2-form />
    </div>
  `,
  styles: `
    .sekcja-2 {
      margin: 24px 0px 120px;
    }
  `,
})
export class Sekcja2 {}
