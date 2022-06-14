import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  current_path: string;
  mobile :boolean = false;
  menu;
  constructor(private route: Router) {
    this.current_path = this.route.url
    if (this.current_path == "/hellodjo" || this.current_path == "/aah" || this.current_path == "/renovation") {
      this.current_path = "/services"
    }
    
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
    this.router_subscribe()

    if (window.innerWidth<= 500){
      this.mobile = true;
    }
  }

  router_subscribe(): void {
    this.route.events.subscribe(() => {
      this.current_path = this.route.url
      if (this.current_path == "/hellodjo" || this.current_path == "/aah" || this.current_path == "/renovation") {
        this.current_path = "/services"
      }
    })
  }

  navigateTo(path): void {
 
    this.route.navigate([path])

    
  }
}
