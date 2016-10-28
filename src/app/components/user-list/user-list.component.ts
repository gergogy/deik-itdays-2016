import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css'],
  providers: [
    UserService
  ]
})

export class UserListComponent {

  userList: Array<UserModel> = [];

  constructor(private _userService: UserService) {
    this._userService.getUsers().subscribe(result => this.userList = result);
  }

}
