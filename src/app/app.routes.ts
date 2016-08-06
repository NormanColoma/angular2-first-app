/**
 * Created by Norman on 05/08/2016.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import { WritersComponent } from './writers/writers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WriterDetailsComponent } from './writer-details/writer-details.component';
import { BooksComponent } from './books/books.component';

const routes: RouterConfig = [
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

export const appRouterProviders = [
  provideRouter(routes)
];
