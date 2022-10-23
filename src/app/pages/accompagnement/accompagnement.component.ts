import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-accompagnement',
  templateUrl: './accompagnement.component.html',
  styleUrls: ['./accompagnement.component.scss']
})
export class AccompagnementComponent implements OnInit {

  constructor(private navigationService:NavigationService,private router:Router) { 
    this.navigationService.setNavBarClass('navigation-bar-container-black'); 
  }
  

  ngOnInit() {}

  navigate(value){
    this.router.navigate([value]);
  }
  scroll(){
    this.navigationService.windowScrollBy(1)
  }

}
