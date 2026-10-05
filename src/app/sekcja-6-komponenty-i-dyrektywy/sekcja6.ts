import { Component } from '@angular/core';
import { Sekcja6Selectors } from './src/sekcja6-selectors/sekcja6-selectors';
import { Sekcja6NgContent } from './src/sekcja6-ng-content/sekcja6-ng-content';

@Component({
  selector: 'app-sekcja-6',
  imports: [Sekcja6Selectors, Sekcja6NgContent],
  template: `
    <div class="sekcja-6">
      <app-sekcja6-selectors />
      <hr />

      <app-sekcja6-ng-content />
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
