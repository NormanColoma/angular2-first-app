import {WriterService} from "../core/writer.service";
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

  constructor(private writerService: WriterService) { }

  ngOnInit() {
    this.currentWriter = new Writer();
  }

  /**
   * Takes the name of the writer from the form and suscribe to addWriter service and
   * push it to the current array of writers
   * @param  {string} name -> Name of the writer
   *
   */
  addWriter(name: string){
    this.writerService.addWriter(name).subscribe(writer => this.addWriterToView(writer));
  }

  addWriterToView(writer: Writer){
    if(this.writers.length < 3)
      this.writers.push(writer);
  }

}
