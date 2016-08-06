import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Writer } from '../writers/writer';
import { WriterService } from '../writers/writer.service';


@Component({
  moduleId: module.id,
  selector: 'writers-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  writers: Writer [] = [];
  constructor(private router: Router,
              private writerService: WriterService) { }

  ngOnInit() {
    this.writerService.getWriters()
      .then(writers => this.writers = writers.slice(1, 4));
  }

  seeDetail(writer: Writer) {
    let link = ['/detail', writer.id];
    this.router.navigate(link);
  }

}
