import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [
    UserService
  ]
})

export class HeaderComponent {

  loggedInUser: UserModel = null;

  constructor(private _userService: UserService) {
    this._userService.getLoggedIn().subscribe(result => this.loggedInUser = result);
  }

  private preziBranding = {
    img: '/assets/angular.svg',
    alt: 'Angular logo',
  };

}
