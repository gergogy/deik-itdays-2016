import { Component } from '@angular/core';

const baseString = 'Wow, such string';
const changedString = 'Oh look, my string has been changed!';

const dogeAttrs = {
  type: 1,
  src: '/assets/002.jpg',
  alt: 'doge avatar'
};

const lianaAttrs = {
  type: 2,
  src: '/assets/003.jpg',
  alt: 'liana avatar'
};

@Component({
  selector: 'data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css']
})

export class DataBindingComponent {

  basicString: string = baseString;
  red: boolean = false;
  property: any = dogeAttrs;
  nameObject: any = {
    firstName: '',
    lastName: ''
  };

  onClick = function() {
    this.basicString = (this.basicString === baseString) ? changedString : baseString;
    this.property = (this.property.type === 1) ? lianaAttrs : dogeAttrs;
    this.red = !this.red;
    let temp = this.nameObject.firstName;
    this.nameObject.firstName = this.nameObject.lastName;
    this.nameObject.lastName = temp;
  }

}
