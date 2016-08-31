/**
 * Created by Norman on 10/08/2016.
 */
import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';
import { routing,
  appRoutingProviders } from './app.routes';
import {WritersModule} from "./writers/writers.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DashboardModule,
    WritersModule,
    CoreModule,
    routing
  ],
  bootstrap:    [AppComponent],
  providers:    [
    appRoutingProviders,
  ]
})
export class AppModule {}
