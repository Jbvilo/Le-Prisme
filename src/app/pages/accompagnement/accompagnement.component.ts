import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-accompagnement',
  templateUrl: './accompagnement.component.html',
  styleUrls: ['./accompagnement.component.scss']
})
export class AccompagnementComponent implements OnInit {

  constructor(private navigationService:NavigationService) { 
    this.navigationService.setNavBarClass('navigation-bar-container-grey'); 
  }
  

  ngOnInit() {}

}
