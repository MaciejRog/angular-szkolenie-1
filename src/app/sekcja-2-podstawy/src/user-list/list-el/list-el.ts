import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { IUser } from './list-el.model';

@Component({
  selector: 'app-list-el',
  imports: [],
  templateUrl: './list-el.html',
  styleUrl: './list-el.css',
})
export class ListEl {
  @Input({ required: true }) userEL!: IUser;
  isSelected = input(false);

  listElClasses = computed(() => {
    if (this.isSelected()) {
      console.warn(`isSelected IF`);
      return ['active'];
    }
    console.warn(`isSelected ELSE`);
    return [];
  });
  @Output() selectUser = new EventEmitter<number>();

  onClick() {
    this.selectUser.emit(this.userEL.id);
  }
}
