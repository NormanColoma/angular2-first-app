/**
 * Created by Norman on 05/08/2016.
 */
/**
 * Created by Norman on 05/08/2016.
 */
import { Routes, RouterModule }  from '@angular/router';
import { WritersComponent } from './writers/writers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WriterDetailsComponent } from './writer-details/writer-details.component';
import { BooksComponent } from './books/books.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'writers',
    component: WritersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'detail/:id',
    component: WriterDetailsComponent
  },
  {
    path: 'writers/:id/books',
    component: BooksComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const appRouterProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
