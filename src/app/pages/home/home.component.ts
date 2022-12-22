import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navigationService:NavigationService,private router:Router) {
    this.navigationService.setNavBarClass('navigation-bar-container-black'); 
  }

  ngOnInit(): void { }
  windowScrollBy(pageNumber:number){
    this.navigationService.windowScrollBy(pageNumber);
  }
  navigate(value){
    this.navigationService.navigate(value)
  }
  navigate2(){
    this.navigationService.navigate('/plateforme')
  }

}
