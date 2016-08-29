import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WriterService } from '../writers/writer.service';
import { Book } from './book';

@Component({
  moduleId: module.id,
  selector: 'writer-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css']
})
export class BooksComponent implements OnInit {

  sub:any;
  books: Book [] = [];
  writer_name: string;
  constructor(private route: ActivatedRoute,
              private writerService: WriterService) { }

  /**
   * Extracts id paramater (which represents the id of the Writer) and fecths the books
   * @return {Json} -> Array of books
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.writerService.getBooks(id)
        .subscribe(books => this.books = books);
      this.writerService.getWriter(id)
        .subscribe(writer=> this.writer_name = writer.name);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}
