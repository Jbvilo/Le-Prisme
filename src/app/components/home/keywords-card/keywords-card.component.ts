import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-keywords-card',
  templateUrl: './keywords-card.component.html',
  styleUrls: ['./keywords-card.component.scss']
})
export class KeywordsCardComponent implements OnInit {
chantier:number=1;
exp:number=1;
visible:boolean=false
  mobile: boolean;

  constructor(private router:Router) {

   }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if(window.screen.height<=720){
    if(window.scrollY > 1230){
    let interval=setInterval(() => {
      if(this.chantier<300){
        this.chantier++
       
      }
      if(this.exp<30){
        this.exp++;
      }
   
      if(this.chantier >= 300){
        clearInterval(interval)
        this.visible=true
      }
    },100);
    }
  }
  else {
    if(window.scrollY > 1650){
      let interval=setInterval(() => {
        if(this.chantier<300){
          this.chantier++
        }
        if(this.exp<30){
          this.exp++;
        }
        if(this.chantier >= 300){
          clearInterval(interval)
          this.visible=true
        }
      },100);
      }

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
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
  }

  navigateTo(path) {
    this.router.navigate([path])
  }
}
