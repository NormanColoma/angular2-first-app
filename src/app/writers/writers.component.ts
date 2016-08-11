import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Writer } from './writer';
import { WriterService } from './writer.service';


@Component({
  moduleId: module.id,
  selector: 'writers-list',
  templateUrl: 'writers.component.html',
  styleUrls: ['writers.component.css']
})

export class WritersComponent implements OnInit {

  writers: Writer [];
  currentWriter: Writer;
  selectedWriter: Writer;
  constructor(private router: Router,
              private writerService: WriterService) { }

  getWriters(){
    this.writerService.getWriters().then(writers => this.writers = writers);
  }
  ngOnInit() {
    this.getWriters();
    this.currentWriter = new Writer();
  }

  onSelect(writer: Writer){
    this.selectedWriter = writer;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedWriter.id]);
  }

  gotoBooks(){
    this.router.navigate(['/writers', this.selectedWriter.id, 'books']);
  }

  addWriter(){
    let writer = new Writer();
    writer.name = this.currentWriter.name;
    writer.total_books = 0;
    this.writers.push(writer);
  }
}
