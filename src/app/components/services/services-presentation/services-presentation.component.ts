import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-presentation',
  templateUrl: './services-presentation.component.html',
  styleUrls: ['./services-presentation.component.scss']
})
export class ServicesPresentationComponent implements OnInit {
   img1:boolean=true;
   imgtext="Avant";
  constructor(private route:Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.img1 = !this.img1;
      if(this.img1){
        this.imgtext="Avant"
      }
      else {
        this.imgtext="Après"
      }
    }, 5000);
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
