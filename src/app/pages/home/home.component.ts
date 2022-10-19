import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navigationService:NavigationService) {
    this.navigationService.setNavBarClass('navigation-bar-container-black'); 
  }

  ngOnInit(): void { }
  windowScrollBy(pageNumber:number){
    this.navigationService.windowScrollBy(pageNumber);
  }

}
