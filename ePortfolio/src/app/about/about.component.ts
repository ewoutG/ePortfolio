import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  age = moment().diff('1995-07-21', 'years',false);

    constructor() {

  }

  ngOnInit() {
  }

}
