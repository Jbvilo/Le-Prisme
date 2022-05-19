import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renovation',
  templateUrl: './renovation.component.html',
  styleUrls: ['./renovation.component.scss']
})
export class RenovationComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo() {
    this.router.navigate(['/demande'])
}
}
