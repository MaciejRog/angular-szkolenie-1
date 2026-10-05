import { Component } from '@angular/core';

@Component({
  selector: 'app-sekcja6-selector-tag', // TAG selektor -> doda nowy tag HTML w DOM
  imports: [],
  template: `<span>TAG</span>`,
})
class Sekcja6SelectorTag {}

@Component({
  selector: '[app-sekcja6-selector-attribute]', // attribute selektor -> nie doda nowego tagu w DOM
  imports: [],
  template: `<span>ATTRIBUTE</span>`,
})
class Sekcja6SelectorAttribute {}

// #########################################################
// #########################################################
// #########################################################

@Component({
  selector: 'app-sekcja6-selectors',
  imports: [
    Sekcja6SelectorTag, //
    Sekcja6SelectorAttribute,
  ],
  template: `
    <app-sekcja6-selector-tag />
    <br />
    <button app-sekcja6-selector-attribute></button>
    <!-- 
    <app-sekcja6-selectors _ngcontent-ng-c3019295093="">
      <app-sekcja6-selector-tag>                                // nowy tag tzw 'HOST' opakujący template
        <span>TAG</span>
      </app-sekcja6-selector-tag>
      <br>
      <button app-sekcja6-selector-attribute="">                // attribute nie tworzy nowego tagu, hostem jest elementem na którym atrybut został dodany
        <span>ATTRIBUTE</span>
      </button>
    </app-sekcja6-selectors>
    -->
  `,
})
export class Sekcja6Selectors {}
