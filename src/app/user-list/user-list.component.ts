import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { UserInterface } from '../interfaces/user.interface'

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css'],
  providers: [
    UserService
  ]
})

export class UserListComponent {

  userList: Array<UserInterface> = [];

  constructor(private _userService: UserService) {
    this._userService.getUsers().subscribe(result => this.userList = result);
  }

}
