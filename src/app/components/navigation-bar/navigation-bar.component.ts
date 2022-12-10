import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  mobile: boolean;

  constructor(private route: Router) { }

  ngOnInit(): void {
    if (window.innerWidth <= 500) {
      this.mobile = true;
    }
  }

  navigateTo(path): void {
    this.route.navigate([path])
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 500) {
      this.mobile = true
    }
    else {
      this.mobile = false
    }
  }
}
