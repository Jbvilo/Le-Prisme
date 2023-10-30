import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Le Prisme';
  mobile:boolean;

  constructor() {
this.screen()


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
  ngOnInit(): void { }

}
