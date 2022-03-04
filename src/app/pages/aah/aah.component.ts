import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aah',
  templateUrl: './aah.component.html',
  styleUrls: ['./aah.component.scss']
})
export class AahComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollBy(0,0)
  }

  navigateTo() {
    location.href ="chatbox.html"
}

}
