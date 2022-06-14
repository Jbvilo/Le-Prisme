import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  mobile: boolean;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
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
  
}
