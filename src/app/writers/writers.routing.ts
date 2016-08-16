
/**
 * Created by Norman on 16/08/2016.
 */
import {RouterModule} from "@angular/router";
import {WritersComponent} from "./writers.component";
import {WriterDetailsComponent} from "../writer-details/writer-details.component";
import {BooksComponent} from "../books/books.component";

export const writersRouting = RouterModule.forChild([
  {  path: 'writers',
    component: WritersComponent
  },
  {
    path: 'detail/:id',
    component: WriterDetailsComponent
  },
  {
    path: 'writers/:id/books',
    component: BooksComponent
  }
]);
