import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-firstview',
  templateUrl: './firstview.component.html',
  styleUrls: ['./firstview.component.scss']
})
export class FirstviewComponent implements OnInit {
  eventSubscription: any;

  constructor(private router:Router) {
    
   }
   @HostListener('window:scroll', ['$event'])
   onWindowScroll($event) {
       console.log($event);
   }


  ngOnInit(): void {

    
  }
  navigateTo(path) {
    if(path =="chatbox.html"){
  location.href =path
    }
this.router.navigate([path])
  }
  onScroll(event){
    alert(event)
  }

}
