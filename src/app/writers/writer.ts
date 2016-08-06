/**
 * Created by Norman on 04/08/2016.
 */
import { Book } from '../books/book';

export class Writer{
  id: number;
  name: string;
  about: string;
  short_desc: string;
  total_books: number;
  books: Book [];
}
