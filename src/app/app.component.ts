import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Le Prisme';
  navbar_visible = true;
  footer_visible = true;
  constructor(private navigationService:NavigationService,private router:Router) { 
    this.router.events.subscribe(e=>{
      console.log(this.router.url)
      if(this.router.url == '/plateforme'){
        this.footer_visible = false;
      }
      else {
        this.footer_visible = true;
      }
    })
   }
  ngOnInit(): void {  }


}
