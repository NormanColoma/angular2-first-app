/**
 * Created by Norman on 05/08/2016.
 */
import { Routes, RouterModule }  from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [

];

export const appRouterProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
