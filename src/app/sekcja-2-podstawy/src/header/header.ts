import { Component, computed, signal } from '@angular/core';
import { SEKCJA_2_DATA } from '../../assets/sekcja2Data';

/*
każdy komponent musi mieć dekorator '@Component'
a w nim
  - 'selector'
  - 'templateUrl' lub 'template'
*/
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  /*
  <img src="" [alt]="fullName" />                   // property binding (property bo bindowanie jest do obiektu DOM, nie na atrybucie HTML)
              [attr.aria-valuenow]="currentVal"     // attribute binding -> dzięki przedrsotkowi 'attr.' jest dodawany do atrybutu HTML
  <p>fullName = {{ fullName }}</p>                  // string interpolation
  <button (click)="onChangeUser()">LOSUJ</button>   // event binding
  */

  /*
  KLASYCZNY STAN - oparty na zone.js 
  tworzone były takie grupy między komponentami i przy np: zdarzeniu klik był sprawdzany stan wielu komponentów pod względem zmian w nich
  */
  selectedUser = SEKCJA_2_DATA[Math.floor(Math.random() * SEKCJA_2_DATA.length)];

  // getter - dostęp do zmiennej wyliczanej z innych jako zmienna, a nie funkcja
  // daltego dostęp jako '{{ fullName }}' a nie '{{ fullName() }}'
  get fullName() {
    return this.selectedUser.firstName + this.selectedUser.lastName;
  }

  onChangeUser() {
    this.selectedUser = SEKCJA_2_DATA[Math.floor(Math.random() * SEKCJA_2_DATA.length)];
  }

  /*
  NOWOCZESNY STAN - SYGNAŁ
  tworzona jest sieć zależności i sygnał śledzi miejsca, w których jest wykorzystywany np: 'computed' lub w szablonie HTML
  i jeśli zmieni wartość to informuje o tym tylko te miejsce, które wymagają tego (mechanizm sybskrypcji)
  */
  // dostęp do wartości w szablonie jako wywołanie funkcji '<p>fullName = {{ signalFullName() }}</p>'
  signalSelectedUser = signal(SEKCJA_2_DATA[Math.floor(Math.random() * SEKCJA_2_DATA.length)]);
  signalFullName = computed(() => {
    // computed - to sygnał, który wywoła się gdy wykorzystywany w nim syngął zwróci nową wartość
    // czyli jak zmieni się 'signalSelectedUser'
    return this.signalSelectedUser().firstName + this.signalSelectedUser().lastName;
  });

  onSignalChangeUser() {
    // wartość sygnału można zmienić, metoda 'set'
    this.signalSelectedUser.set(SEKCJA_2_DATA[Math.floor(Math.random() * SEKCJA_2_DATA.length)]);
  }
}
