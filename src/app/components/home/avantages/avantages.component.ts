import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avantages',
  templateUrl: './avantages.component.html',
  styleUrls: ['./avantages.component.scss']
})
export class AvantagesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  navigateTo(path): void {
    this.route.navigate([path])
  }

}
