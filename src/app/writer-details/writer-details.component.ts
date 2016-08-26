import { Component, OnInit, OnDestroy } from '@angular/core';
import { Writer } from '../writers/writer';
import { ActivatedRoute } from '@angular/router';
import { WriterService } from '../writers/writer.service';

@Component({
  moduleId: module.id,
  selector: 'writer-details',
  templateUrl: 'writer-details.component.html',
  styleUrls: ['writer-details.component.css']
})
export class WriterDetailsComponent implements OnInit, OnDestroy{
  sub: any;
  writer: Writer;

  constructor(
    private writerService: WriterService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.writerService.getWriter(id).subscribe(writer => this.writer = writer);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
