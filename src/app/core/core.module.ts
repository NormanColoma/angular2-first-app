import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import {HttpModule} from '@angular/http';
import {WriterService} from "./writer.service";
import { CommonModule }      from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';

@NgModule({
  imports:      [ CommonModule, HttpModule, BrowserModule ],
  providers:    [ WriterService]
})
export class CoreModule {
}
