/**
 * Created by Norman on 05/08/2016.
 */
import { Injectable } from '@angular/core';
import { WRITERS } from './mock-writers';
@Injectable()
export class WriterService {

  getWriters(){
    return Promise.resolve(WRITERS);
  }

  getWriter(id: number) {
    return this.getWriters()
      .then(writers => writers.find(writer => writer.id === id));
  }

  getBooks(id: number){
    return this.getWriter(id)
      .then(writer => writer.books);
  }
}
