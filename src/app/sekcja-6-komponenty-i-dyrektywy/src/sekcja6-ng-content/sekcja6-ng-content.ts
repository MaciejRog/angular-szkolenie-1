@Component({
  selector: 'app-sekcja6-ng-content-temp-content',
  imports: [],
  template: `
    <div class="part-a">
      <ng-content />
    </div>
    <div class="part-b">
      <ng-content select="[part-b]" />
    </div>
    <div class="part-c">
      <ng-content select="part-c" />
    </div>
    <div class="part-d">
      <ng-content select="part-d">
        przy braku dopasowania można wyświetlić tekst alternatywny
      </ng-content>
    </div>
    <div class="part-e">
      <ng-content select="input, textare">
        wskazuje konkretne tagi które mogą trafić w to miejsce (albo 'input' albo 'textarea')
      </ng-content>
    </div>
  `,
})
class TempContent {}

// #########################################################
// #########################################################
// #########################################################

import { Component } from '@angular/core';

@Component({
  selector: 'app-sekcja6-ng-content',
  imports: [TempContent],
  template: ` <app-sekcja6-ng-content-temp-content>
    <p>Brak dopasowania w czeście 'select', więc trafi do ogólnego ng-content</p>
    <p part-b>Ma dopasowanie w select</p>
    <p ngProjectAs="part-c">
      mówimy jako jaki ng-content ma być wyrenderowany dzięki 'ngProjectAs'
    </p>
    <input type="text" />
  </app-sekcja6-ng-content-temp-content>`,
})
export class Sekcja6NgContent {}
