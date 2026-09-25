import { Component } from '@angular/core';
import { Header } from './src/header/header';
import { UserList } from './src/user-list/user-list';
import { Sekcja2Form } from './src/sekcja2-form/sekcja2-form';
import { Sekcja2Ngcontent } from './src/sekcja2-ngcontent/sekcja2-ngcontent';
import { Sekcja2Pipes } from './src/sekcja2-pipes/sekcja2-pipes';
import { Sekcja2Service } from './src/sekcja2-service/sekcja2-service';

@Component({
  selector: 'app-sekcja-2',
  imports: [Header, UserList, Sekcja2Form, Sekcja2Ngcontent, Sekcja2Pipes, Sekcja2Service],
  template: `
    <div class="sekcja-2">
      <app-header />
      <hr />
      <app-user-list />
      <hr />
      <app-sekcja2-form />
      <hr />
      <app-sekcja2-ngcontent
        >-
        <p>Treść_1</p>
      </app-sekcja2-ngcontent>
      <app-sekcja2-ngcontent>
        <p>Treść_2</p>
      </app-sekcja2-ngcontent>
      <hr />
      <app-sekcja2-pipes />
      <hr />
      <app-sekcja2-service />
    </div>
  `,
  styles: `
    .sekcja-2 {
      margin: 24px 0px 120px;
    }
  `,
})
export class Sekcja2 {}
