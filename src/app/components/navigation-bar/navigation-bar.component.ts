import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  mobile: boolean;

  constructor(private route: Router,private formulaireService:FormulaireServiceService) { }

  ngOnInit(): void {
    if (window.innerWidth <= 500) {
      this.mobile = true;
    }
  }
  navigate(){
    window.location.href = "https://home-5010518602.app-ionos.space/#/";
  }

  navigateTo(path): void {
    if(path == "home"){
      this.formulaireService.goFirstView()
    }
    this.route.navigate([path])
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 500) {
      this.mobile = true
    }
    else {
      this.mobile = false
    }
  }
}
