import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    let logo= document.getElementsByClassName('navbar-logos')
    for (let i = 0; i < logo.length; i++) {
      logo[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  navigateTo(path){
    this.route.navigate([path])
  }

}
