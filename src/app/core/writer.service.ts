/**
 * Created by Norman on 05/08/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Book} from "../books/book";
import { Headers, RequestOptions } from '@angular/http';
import {Writer} from "../writers/writer";

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
   * Fecth a paginated collection of writers
   * @param -> Number of writers to skip
   * @return {Observable<Writer[]>} -> Collection of Writers
   */
  getWritersPaginated(page: number): Observable<Writer[]>{
    let url = this.apiUrl+"/page/"+page;
    return this.http.get(url).map(this.extractData);
  }

  /**
   * Get the total numbers of writers
   * @return {Observable<number>} -> Total number of writers
   */
  getTotalWriters(): Observable<number>{
    let url = this.apiUrl+"/total";
      return this.http.get(url).map(this.extractData);
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

  /**
   * Takes the name of the writer and post it to the API
   * @param  {String} name -> Name of the writer to be inserted
   * @return {Observable<Writer>} -> Writer data
   */
  addWriter(name: String): Observable<Writer>{
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl, body, options)
                   .map(this.extractData);
  }

  deleteWriter(id: string){
    const url = this.apiUrl+"/"+id;
    return this.http.delete(url).map(this.handleOperation);
  }

  private handleOperation(res: Response){
    if(res.status === 204){
      return "Deleted";
    }else{
      return "Error";
    }
  }
}
