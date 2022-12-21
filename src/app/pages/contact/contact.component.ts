import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private navigationService:NavigationService) {
    this.navigationService.setNavBarClass('navigation-bar-container-black'); 
  }
  ngOnInit(): void {
  }

}
