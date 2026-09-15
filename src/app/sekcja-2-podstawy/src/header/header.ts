import { Component } from '@angular/core';
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
  selectedUser = SEKCJA_2_DATA[Math.floor(Math.random() * SEKCJA_2_DATA.length)];

  // getter - dostęp do zmiennej wyliczanej z innych jako zmienna, a nie funkcja
  // daltego dostęp jako '{{ fullName }}' a nie '{{ fullName() }}'
  get fullName() {
    return this.selectedUser.firstName + this.selectedUser.lastName;
  }

  onChangeUser() {
    this.selectedUser = SEKCJA_2_DATA[Math.floor(Math.random() * SEKCJA_2_DATA.length)];
  }
}
