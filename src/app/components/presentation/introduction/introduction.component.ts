import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  mobile: boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
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
}
