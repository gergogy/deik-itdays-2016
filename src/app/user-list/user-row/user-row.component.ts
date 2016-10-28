import { Component, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface'

@Component({
  selector: 'user-row',
  templateUrl: 'user-row.component.html',
  styleUrls: ['user-row.component.css']
})

export class UserRowComponent {

  @Input('user-object') userObj: UserInterface = null;

}
