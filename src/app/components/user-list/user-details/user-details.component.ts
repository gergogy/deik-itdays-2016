import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { UserModel } from "../../../models/user.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.css'],
  providers: [
    UserService
  ]
})

export class UserDetailsComponent implements OnInit, OnDestroy {

  id: number = null;
  idSubscription: Subscription = null;
  userObj: UserModel = null;

  constructor(private _route: ActivatedRoute, private _userService: UserService) {
  }

  ngOnInit() {
    this.idSubscription = this._route.params.subscribe(params => {
      this.id = params['id'];
      this._userService.getUserById(this.id).subscribe(
        result => this.userObj = result,
        error => console.error('SERVER ERROR (' + error.status + '): ', error));
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }


}
