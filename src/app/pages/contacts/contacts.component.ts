import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() {
    window.scrollTo(0,0)
  }

  ngOnInit(): void {
  }

  navigateTo(path) {
    location.href = path
  }
}
