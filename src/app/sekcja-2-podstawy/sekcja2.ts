import { Component } from '@angular/core';
import { Header } from './src/header/header';
import { UserList } from './src/user-list/user-list';

@Component({
  selector: 'app-sekcja-2',
  imports: [Header, UserList],
  template: `
    <app-header />
    <hr />
    <app-user-list />
  `,
})
export class Sekcja2 {}
