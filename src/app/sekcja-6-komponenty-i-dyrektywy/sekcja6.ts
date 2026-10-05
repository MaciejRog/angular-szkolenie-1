import { Component } from '@angular/core';
import { Sekcja6Selectors } from './src/sekcja6-selectors/sekcja6-selectors';

@Component({
  selector: 'app-sekcja-6',
  imports: [Sekcja6Selectors],
  template: `
    <div class="sekcja-6">
      <app-sekcja6-selectors />
      <hr />
    </div>
  `,
  styles: `
    .sekcja-6 {
      margin: 24px 0px 120px;
    }
  `,
})
export class Sekcja6 {}
