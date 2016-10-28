import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-row',
  templateUrl: 'user-row.component.html',
  styleUrls: ['user-row.component.css']
})

export class UserRowComponent {

  @Input('user-object') userObj = null;

}
