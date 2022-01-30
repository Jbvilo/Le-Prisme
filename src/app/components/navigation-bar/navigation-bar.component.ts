import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  current_path:string;
  constructor(private route: Router) {
    this.current_path = this.route.url
  }

  ngOnInit(): void {
    this.router_subscribe()
  }
  
  router_subscribe(): void {
    this.route.events.subscribe(() => {
      this.current_path = this.route.url
    })
  }

  navigateTo(path): void {
    this.route.navigate([path])
  }
}
