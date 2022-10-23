import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navbarClass!:string;
  navbarVisibility = true;
  navBarSubject : BehaviorSubject<any>;

  
  constructor() { }

  windowScrollBy(pageNumber:number){
    let pageHeight = window.innerHeight*pageNumber+30;

    let i = 0;
    let interval = setInterval(() => {
      if (i <= pageHeight) {
        window.scroll(0,i)
        i=i+(pageHeight/50);
        console.log(i)
      } else {
        clearInterval(interval)
      }
    }, 15);
  }

  setNavBarClass(className){
    this.navbarClass = className
  }

  setNavBarVisibility(value){
    this.navbarVisibility = value
    this.navBarSubject.next("")
  }
}
