import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

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
}
