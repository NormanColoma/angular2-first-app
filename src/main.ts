import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms()
]);
