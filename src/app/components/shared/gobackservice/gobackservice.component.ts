import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gobackservice',
  templateUrl: './gobackservice.component.html',
  styleUrls: ['./gobackservice.component.scss']
})
export class GobackserviceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['services']);
  }
}
