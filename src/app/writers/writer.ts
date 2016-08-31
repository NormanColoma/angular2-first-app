/**
 * Created by Norman on 04/08/2016.
 */
import { Book } from '../books/book';

export class Writer{
  _id: string;
  name: string;
  about: string;
  short_desc: string;
  total_books: number;
  books: Book [];
}
