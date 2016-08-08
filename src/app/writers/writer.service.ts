/**
 * Created by Norman on 05/08/2016.
 */
import { Injectable } from '@angular/core';
import { WRITERS } from './mock-writers';

/**
 * This service will manage the operations related to Writers against the API Rest Backend
 */
@Injectable()
export class WriterService {

  /**
   * Fetch all the writers and return them into array
   * @returns {Promise<Writer[]>}
   */
  getWriters(){
    return Promise.resolve(WRITERS);
  }

  /**
   * Look up and return the writer that match with the id passed.
   * @param id -> Id of the writer which is going to be retrieved
   * @returns {Promise<TResult>}-> Promise containing the writer found
   */
  getWriter(id: number) {
    return this.getWriters()
      .then(writers => writers.find(writer => writer.id === id));
  }

  /**
   * Fetch all the books that belong to the Writer
   * @param id-> Id of the writer
   * @returns {Promise<TResult>} -> Promise containing all the books of a Writer
   */
  getBooks(id: number){
    return this.getWriter(id)
      .then(writer => writer.books);
  }
}
