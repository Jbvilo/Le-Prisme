import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstview',
  templateUrl: './firstview.component.html',
  styleUrls: ['./firstview.component.scss']
})
export class FirstviewComponent implements OnInit {
  eventSubscription: any;
  mobile: boolean;

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    if (window.innerWidth<= 500){
      this.mobile = true;
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

  navigateTo(path) {
    if (path == "chatbox.html") {
      location.href = path
    }
    this.router.navigate([path])
  }

  scroll(anchor?) {
    let i = 0;
    let interval = setInterval(() => {
      if (i < this.screensize()) {
        window.scroll({ left: 0, top: i = i + 5 })
      } else {
        clearInterval(interval)
      }
    }, 5);
  }

  screensize(): number {
    if (window.screen.width <= 500) {
      return 585;
    }
    else if (window.screen.width <= 1080) {
      return 800
    }
    else {
      return 500;
    }
  }
}
