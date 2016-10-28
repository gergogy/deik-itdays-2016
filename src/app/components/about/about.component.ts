import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <h2>About</h2>
    <p>
      Antal Bodnar<br>
      Survey Sampling International
    </p>
    <p>
      <img src="/assets/ssi.jpg" alt="ssi">
    </p>    
    <p>
      <a routerLink="broken-link" class="top-menu">More Info</a>
    </p>    
  `,
  styles: [
    'p { font-size: 20px; }',
  ]
})

export class AboutComponent {

}
