/**
 * Created by Norman on 16/08/2016.
 */

import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

export const dashboardRouting = RouterModule.forChild([
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]);
