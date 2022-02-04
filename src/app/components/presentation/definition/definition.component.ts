import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  visible: boolean=false;

  constructor() { }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  console.log(window.screen)
}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      
    console.log(window.scrollY)
    if(window.scrollY >=0){
      this.visible=true
    }
  }

  ngOnInit(): void {
    console.log(window.screen)
  }

}
