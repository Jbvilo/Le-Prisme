import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  visible: boolean=true;

  constructor(private router:Router) { }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  //console.log(window.screen)
}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      
      this.visible=true
  }

  ngOnInit(): void {
    // console.log(window.screen)
  }

  navigateTo(path): void {
    this.router.navigate([path])
  }

}
