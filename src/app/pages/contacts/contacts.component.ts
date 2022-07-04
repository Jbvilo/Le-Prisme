import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  mobile: boolean;

  constructor(private router:Router) {
    window.scrollTo(0,0)
  }

  @HostListener('window:resize', ['$event'])
onResize(event) {
if(window.innerWidth <= 500){
  this.mobile = true
}
else {
  this.mobile = false
}
}
  ngOnInit(): void {
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
  }
  navigateTo(path) {
    this.router.navigate(['/demande'])
  }
}
