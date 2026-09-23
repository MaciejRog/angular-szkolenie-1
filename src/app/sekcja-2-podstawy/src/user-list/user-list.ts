import { Component } from '@angular/core';
import { SEKCJA_2_DATA } from '../../assets/sekcja2Data';
import { ListEl } from './list-el/list-el';
import { CommonModule } from '@angular/common';
import { TUser } from './user-list.model';

@Component({
  selector: 'app-user-list',
  imports: [ListEl, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  selectedUser: TUser | undefined;
  userList = SEKCJA_2_DATA;

  setSelectedUser(id: number) {
    this.selectedUser = this.userList.find((userEl) => userEl.id === id);
  }
}
