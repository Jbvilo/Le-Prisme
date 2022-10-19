import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router:Router,private navigationService:NavigationService) { }

  ngOnInit(): void {
  }
  navigate(routeName:string){
    this.router.navigate([routeName])
  }
  navBarClass():string {
    return this.navigationService.navbarClass;
  }
}
