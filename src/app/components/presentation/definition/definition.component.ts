import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  visible: boolean=true;
  mobile: boolean;

  constructor(private router:Router) { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      
      this.visible=true
  }


  navigateTo(path): void {
    this.router.navigate([path])
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


}
