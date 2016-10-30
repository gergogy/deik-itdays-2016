import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highLight]',
  host: {
    '(mouseenter)': 'onEnter()',
    '(mouseleave)': 'onLeave()'
  }
})

export class HighlightDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer) {
  }

  onEnter() {
    this._renderer.setElementStyle(this._element.nativeElement, 'backgroundColor', '#eee');
  }

  onLeave() {
    this._renderer.setElementStyle(this._element.nativeElement, 'backgroundColor', null);
  }

}
