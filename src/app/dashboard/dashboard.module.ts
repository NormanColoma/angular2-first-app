/**
 * Created by Norman on 15/08/2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";
import {dashboardRouting} from "./dashboard.routing";
import {HighlightDirective} from "./highlight.directive";

@NgModule({
  declarations: [
    DashboardComponent,
    HighlightDirective
  ],
  imports:      [
    BrowserModule,
    dashboardRouting
  ]
})
export class DashboardModule {}
