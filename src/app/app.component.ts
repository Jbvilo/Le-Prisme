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
  scroll:boolean=false;
  constructor(   private router:Router){
 
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    console.log(window.scrollY)
    if(window.scrollY > 0){
      this.scroll=true;
    }
    else {
      this.scroll=false;
    }
  }

  ngOnInit(): void {
 this.router.events.subscribe(res=>{
  if (res instanceof NavigationStart) {
    if(res.url == "/"){
      this.visible=false
    }
    else {
      this.visible=true
    }
  }
 })
  }

}
