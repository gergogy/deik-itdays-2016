import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[search-field]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class SearchFieldDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer) {
  }

  onFocus() {
    this._renderer.setElementStyle(this._element.nativeElement, 'width', '200px');
  }

  onBlur() {
    this._renderer.setElementStyle(this._element.nativeElement, 'width', null);
  }

}
