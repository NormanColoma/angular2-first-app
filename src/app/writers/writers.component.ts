import {WriterService} from "../core/writer.service";
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Writer } from './writer';



@Component({
  moduleId: module.id,
  selector: 'writers-list',
  templateUrl: 'writers.component.html',
  styleUrls: ['writers.component.css']
})

export class WritersComponent implements OnInit {

  writers: Writer [];
  pages: number [];
  totalPages: number;
  nextPage: number;
  previousPage: number;
  next: boolean;
  previous: boolean;
  active = true;

  constructor(private router: Router,
              private writerService: WriterService) {}

  getWriters(){
    this.writerService.getTotalWriters().subscribe(total => this.paginate(total));
    this.writerService.getWritersPaginated(0).subscribe(writers => this.writers = writers);
  }
  ngOnInit() {
    this.getWriters();
    this.pages = [];
    this.nextPage = 1;
    this.previousPage = 0;
    this.next = true;
    this.previous = false;
  }

  gotoDetail(id:number) {
    this.router.navigate(['/detail', id]);
  }

  gotoBooks(id:number){
    this.router.navigate(['/writers', id, 'books']);
  }

  gotoPage(page:number){
    if(page+1 < this.totalPages){
      this.nextPage = page+1;
      this.next = true;
      if(page >= 1){
        this.previousPage = page-1;
        this.previous = true;
      }else{
        this.previous = false;
      }
    }
    else{
      this.next = false;
      this.previous = true;
      this.previousPage = page-1;
    }
    this.writerService.getWritersPaginated(page).subscribe(writers => this.writers = writers);
  }

  paginate(total: number){
    this.totalPages = Math.ceil(total/3);
    for(let i=0;i<this.totalPages;i++){
      this.pages.push(i+1);
    }
  }



}
