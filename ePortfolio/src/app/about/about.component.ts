import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  age: Date;
  birth = new Date(1995, 21);
  today = new Date();

  constructor() {
  }

  ngOnInit() {
    console.log('birth'+this.birth);
  }

}
