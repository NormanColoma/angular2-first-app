import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {HighlightDirective} from "./higihlight.directive";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [HighlightDirective ],
  exports:      [HighlightDirective,
                  CommonModule, FormsModule ]
})
export class SharedModule { }
