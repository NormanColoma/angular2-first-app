import {WriterService} from "../core/writer.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Writer } from '../writers/writer';


@Component({
  selector: 'writers-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css', '../app.component.css']
})
export class DashboardComponent implements OnInit {

  writers: Writer [] = [];
  constructor(private router: Router,
              private writerService: WriterService) { }

  ngOnInit() {
    this.writerService.getWriters()
      .subscribe(writers => this.writers = writers.slice(1, 4));
  }

  seeDetail(writer: Writer) {
    let link = ['/detail', writer._id];
    this.router.navigate(link);
  }

}
