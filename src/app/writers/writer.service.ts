/**
 * Created by Norman on 05/08/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Writer} from "./writer";

/**
 * This service will manage the operations related to Writers against the API Rest Backend
 */
@Injectable()
export class WriterService {

  constructor(private http: Http){}

  private apiUrl = "http://localhost:3000/writers";
  /**
   * Fetch all the writers and return them into array
   * @returns {Promise<Writer[]>}
   */
  getWriters() : Observable<Writer[]>{
    return this.http.get(this.apiUrl).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  /**
   * Look up and return the writer that match with the id passed.
   * @param id -> Id of the writer which is going to be retrieved
   * @returns {Promise<TResult>}-> Promise containing the writer found
   */
  getWriter(id: string) {
    const url = this.apiUrl+"/"+id;
    return this.http.get(url).map(this.extractData);
  }

  /**
   * Fetch all the books that belong to the Writer
   * @param id-> Id of the writer
   * @returns {Promise<TResult>} -> Promise containing all the books of a Writer
   */
  getBooks(id: string){
    const url = this.apiUrl+"/"+id+"/books";
    return this.http.get(url).map(this.extractData);
  }
}
