import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-accompagnement',
  templateUrl: './accompagnement.component.html',
  styleUrls: ['./accompagnement.component.scss']
})
export class AccompagnementComponent implements OnInit {
 carrous:boolean=true;
  constructor(private navigationService:NavigationService,private router:Router) { 
    this.navigationService.setNavBarClass('navigation-bar-container-black'); 
  }
  

  ngOnInit() {
setInterval(() => {
  this.carrous = !this.carrous
}, 5000);
  }

  navigate(value){
    this.navigationService.navigate(value)
  }
  scroll(){
    this.navigationService.windowScrollBy(1)
  }
  

}
