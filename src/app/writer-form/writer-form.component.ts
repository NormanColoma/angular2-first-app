import { Component, OnInit, Input } from '@angular/core';
import {Writer} from "../writers/writer";

@Component({
  moduleId: module.id,
  selector: 'writer-form',
  templateUrl: 'writer-form.component.html',
  styleUrls: ['writer-form.component.css']
})
export class WriterFormComponent implements OnInit {

  currentWriter: Writer;
  @Input()
  writers: Writer [];
  constructor() { }

  ngOnInit() {
    this.currentWriter = new Writer();
  }

  addWriter(){
    let writer = new Writer();
    writer.name = this.currentWriter.name;
    writer.total_books = 0;
    this.writers.push(writer);
  }

}
