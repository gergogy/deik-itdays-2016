import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent {

  private preziTitle: string = 'preziApp';
  private preziBranding = {
    img: '/assets/angular.svg',
    alt: 'Angular logo',
  };

}
