/**
 * Created by Norman on 05/08/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Writer} from "./writer";
import {Book} from "../books/book";

/**
 * This service will manage the operations related to Writers against the API Rest Backend
 */
@Injectable()
export class WriterService {

  constructor(private http: Http){}

  private apiUrl = "http://localhost:3000/writers";
  /**
   * Fetch all the writers and return them into array
   * @returns {JSON} -> Array of writers
   */
  getWriters() : Observable<Writer[]>{
    return this.http.get(this.apiUrl).map(this.extractData);
  }

  /**
   * Utility function for extracting date from Observable Response. Extracts and return the data.
   * @param  {Response} res-> Observable Response
   * @return {Json} -> Json data
   */
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  /**
   * Look up and return the writer that match with the id passed.
   * @param id -> Id of the writer which is going to be retrieved
   * @returns {JSON}-> Writer JSON Object
   */
  getWriter(id: string): Observable<Writer> {
    const url = this.apiUrl+"/"+id;
    return this.http.get(url).map(this.extractData);
  }

  /**
   * Fetch all the books that belong to the Writer
   * @param id-> Id of the writer
   * @returns {JSON} -> Array of books
   */
  getBooks(id: string): Observable <Book[]>{
    const url = this.apiUrl+"/"+id+"/books";
    return this.http.get(url).map(this.extractData);
  }
}
