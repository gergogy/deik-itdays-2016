import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <h2>404 NOOOOOOOOOOOOOOOT FOUND</h2>
    <img class="not-found" src="/assets/404.gif" alt="404 Not Found">
  `,
  styles: [
    'h2 { text-align: center; }',
    '.not-found { width: 100%; }'
  ]
})

export class NotFoundComponent {
}
