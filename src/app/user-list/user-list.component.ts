import { Component } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css'],
  providers: [
    UserService
  ]
})

export class UserListComponent {

  constructor(private _userService: UserService) {
    this._userService.getUsers();
  }

}
