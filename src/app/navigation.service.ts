import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navbarClass!:string;
  navbarVisibility = true;
  navBarSubject : BehaviorSubject<any>;

  
  constructor(private router:Router) {
    this.router.events.subscribe(()=>{
      window.scrollTo(0,0)
    })
   }

  windowScrollBy(pageNumber:number){
    let pageHeight = window.innerHeight*pageNumber+50

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
  navigate(value){
    this.router.navigate([value])
  }
}
