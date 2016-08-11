/**
 * Created by Norman on 10/08/2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { WriterService } from './writers/writer.service';
import { FormsModule }   from '@angular/forms';
import { routing,
  appRoutingProviders } from './app.routes';
import {WriterDetailsComponent} from "./writer-details/writer-details.component";
import {WritersComponent} from "./writers/writers.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BooksComponent} from "./books/books.component";

@NgModule({
  declarations: [
    AppComponent,
    WriterDetailsComponent,
    WritersComponent,
    DashboardComponent,
    BooksComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    routing
  ],
  bootstrap:    [AppComponent],
  providers:    [
    appRoutingProviders,
    WriterService
  ]
})
export class AppModule {}
