/**
 * Created by Norman on 16/08/2016.
 */
import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[writerHighlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#4682B4';
  }
}
