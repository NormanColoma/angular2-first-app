/**
 * Created by Norman on 10/08/2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { WriterService } from './writers/writer.service';
import { routing,
  appRoutingProviders } from './app.routes';
import {WritersModule} from "./writers/writers.module";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports:      [
    BrowserModule,
    DashboardModule,
    WritersModule,
    routing
  ],
  bootstrap:    [AppComponent],
  providers:    [
    appRoutingProviders,
    WriterService
  ]
})
export class AppModule {}
