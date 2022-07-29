import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avantages',
  templateUrl: './avantages.component.html',
  styleUrls: ['./avantages.component.scss']
})
export class AvantagesComponent implements OnInit {
  mobile: boolean;

  constructor(private route:Router) { }

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
  navigateTo(path): void {
    this.route.navigate([path])
  }

}
