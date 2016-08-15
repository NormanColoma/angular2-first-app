/**
 * Created by Norman on 15/08/2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {WritersComponent} from "./writers.component";
import {CommonModule} from "@angular/common";
import {WriterFormComponent} from "../writer-form/writer-form.component";
import {FormsModule} from "@angular/forms";
import {WriterDetailsComponent} from "../writer-details/writer-details.component";
import {BooksComponent} from "../books/books.component";

@NgModule({
  declarations: [
    WritersComponent,
    WriterFormComponent,
    WriterDetailsComponent,
    BooksComponent
  ],
  imports:      [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  exports: [WritersComponent, WriterDetailsComponent, BooksComponent],
  providers:    []
})
export class WritersModule {}
