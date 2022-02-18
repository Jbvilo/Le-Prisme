import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-firstview',
  templateUrl: './firstview.component.html',
  styleUrls: ['./firstview.component.scss']
})
export class FirstviewComponent implements OnInit {
  eventSubscription: any;

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.screensize()
    window.addEventListener('touchstart', function (e) {
      if (e.touches.length > 1) {
        alert()
      }
    });

  }
  navigateTo(path) {
    if (path == "chatbox.html") {
      location.href = path
    }
    this.router.navigate([path])
  }
  navigate(anchor?) {
    let i = 0;
    let interval = setInterval(() => {
      if (i < this.screensize()) {
        window.scroll({ left: 0, top: i = i + 5 })
      } else {
        clearInterval(interval)
      }
    }, 5);
  }

  screensize():number{
    if(window.screen.height <= 720){
    return 520;
    }
    if(window.screen.height <= 1080){
      return 800
    }
  }
}
