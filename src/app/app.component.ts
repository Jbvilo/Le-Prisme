import { Component, HostListener } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Le Prisme';
  src!:any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setIframeUrl()
  }
  constructor(private sanitizer:DomSanitizer) {
    this.setIframeUrl();
  }
  setIframeUrl(){
    if(window.innerWidth <= 500){
      this.src =  this.sanitizer.bypassSecurityTrustResourceUrl("https://home-5014713519.app-ionos.space/#/");
    }
    else {
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl("https://home-5010518602.app-ionos.space/#/")
    }
  }
}
