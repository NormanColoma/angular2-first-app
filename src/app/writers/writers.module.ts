/**
 * Created by Norman on 15/08/2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {WritersComponent} from "./writers.component";
import {WriterFormComponent} from "../writer-form/writer-form.component";
import {WriterDetailsComponent} from "../writer-details/writer-details.component";
import {BooksComponent} from "../books/books.component";
import {writersRouting} from "./writers.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    WritersComponent,
    WriterFormComponent,
    WriterDetailsComponent,
    BooksComponent
  ],
  imports:      [
    BrowserModule,
    writersRouting,
    SharedModule
  ]
})
export class WritersModule {}
