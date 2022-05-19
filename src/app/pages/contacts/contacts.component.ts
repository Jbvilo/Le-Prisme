import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private router:Router) {
    window.scrollTo(0,0)
  }

  ngOnInit(): void {
  }

  navigateTo(path) {
    this.router.navigate(['/demande'])
  }
}
