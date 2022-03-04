import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renovation',
  templateUrl: './renovation.component.html',
  styleUrls: ['./renovation.component.scss']
})
export class RenovationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo() {
    location.href ="chatbox.html"
}
}
