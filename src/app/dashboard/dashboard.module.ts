/**
 * Created by Norman on 15/08/2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports:      [
    BrowserModule,
  ],
  exports:[DashboardComponent]
})
export class DashboardModule {}
