import { Component, Input } from '@angular/core';
import { UserModel } from "../../../models/user.model";

@Component({
  selector: 'user-row',
  templateUrl: 'user-row.component.html',
  styleUrls: ['user-row.component.css']
})

export class UserRowComponent {

  @Input('user-object') userObj: UserModel = null;

}
