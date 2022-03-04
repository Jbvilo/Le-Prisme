import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellodjo',
  templateUrl: './hellodjo.component.html',
  styleUrls: ['./hellodjo.component.scss']
})
export class HellodjoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(path) {
      location.href =path;
  }
}
