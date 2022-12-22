import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-plateforme',
  templateUrl: './plateforme.component.html',
  styleUrls: ['./plateforme.component.scss']
})
export class PlateformeComponent implements OnInit {
plateforme= false;
  constructor(private navigationService:NavigationService) {
    this.navigationService.setNavBarClass('navigation-bar-container-black');  }

  ngOnInit(): void {
    this.animate()
  }

  navigate(){
    window.location.href = "https://home-5006999311.app-ionos.space/#/home";
  }
  animate(){
    setTimeout(() => {
      this.plateforme=true;
    }, 3300);
  }

}