import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateTo(path) {
    location.href = path
  }

}
