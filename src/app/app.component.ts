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
  visible2: boolean = false;
  scroll: boolean = false;
  computer: boolean;
  mobile:boolean;

  constructor(private router: Router) {

 this.onResize()
this.screen()


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
  this.screen()
  }

  screen(){
if(window.innerWidth <= 500){
  this.mobile= true
}
else{
  this.mobile=false;
}
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationStart) {
        if (res.url == "/") {
          this.visible = false
          this.visible2 = false;
        }
        else if(res.url == "/demande"){
          this.visible = false
          this.visible2 = true;
        }
        else {
          this.visible = true
          this.visible2 = true;
        }
      }
    })
  }

}
