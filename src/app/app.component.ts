import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Le Prisme';
  visible: boolean = false;
  scroll: boolean = false;
  computer: boolean;

  constructor(private router: Router) {

 this.onResize()


  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (window.scrollY > 0) {
      this.scroll = true;
    }
    else {
      this.scroll = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.computer= false;
    }
    else {
      this.computer=true;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationStart) {
        if (res.url == "/") {
          this.visible = false
        }
        else {
          this.visible = true
        }
      }
    })
  }

}
