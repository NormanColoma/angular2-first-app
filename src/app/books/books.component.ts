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
  constructor(private route: ActivatedRoute,
              private writerService: WriterService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.writerService.getBooks(id)
        .then(books => this.books = books);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}
