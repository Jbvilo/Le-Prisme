import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-presentation',
  templateUrl: './services-presentation.component.html',
  styleUrls: ['./services-presentation.component.scss']
})
export class ServicesPresentationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigateTo(path): void {
this.route.navigate([path])
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
    if (window.screen.height <= 720) {
      return 520;
    }
    if (window.screen.height <= 1080) {
      return 800
    }
  }
}
