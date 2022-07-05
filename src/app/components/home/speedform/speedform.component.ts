import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-speedform',
  templateUrl: './speedform.component.html',
  styleUrls: ['./speedform.component.scss']
})
export class SpeedformComponent implements OnInit {
  mobile: boolean;

  constructor() { }


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
