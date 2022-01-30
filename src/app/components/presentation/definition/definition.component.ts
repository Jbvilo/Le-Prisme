import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  visible: boolean=false;

  constructor() { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      
    console.log(window.scrollY)
    if(window.scrollY >=200){
      this.visible=true
    }
  }

  ngOnInit(): void {
  }

}
