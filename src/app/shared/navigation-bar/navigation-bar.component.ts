import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  plateforme!:boolean;
  constructor(private router:Router,private navigationService:NavigationService) { }

  ngOnInit(): void {
   }
  navigate(routeName:string){
    if(routeName == "plateforme"){
      if(!this.plateforme){
        setTimeout(() => {
          this.plateforme = true;
                }, 3200);
      }
      else {
        window.location.href ='https://home-5010518602.app-ionos.space/#/';
        return;
      }
    }
    if(this.router.url != "/plateforme"){
      this.router.navigate([routeName])
    }
 
  }
  navBarClass():string {
    return this.navigationService.navbarClass;
  }
  activebutton(value){
if(this.router.url == '/plateforme'){
    if(value=='/plateforme'){
      return 'glowactive spaceshuttle'
    } 
    else if(value != '/contacts') {
      return 'disap'
    }
} else {
  if(this.router.url == value){
    return 'glowactive';
  }
}
}

  
}
