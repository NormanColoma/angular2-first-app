import { Component } from '@angular/core';
import { WritersComponent } from './writers/writers.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WriterService } from './writers/writer.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,WritersComponent],
  providers: [WriterService]
})
export class AppComponent {
  title = 'Writer App';
}
