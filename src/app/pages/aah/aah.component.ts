import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aah',
  templateUrl: './aah.component.html',
  styleUrls: ['./aah.component.scss']
})
export class AahComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  navigateTo() {
    this.router.navigate(['/demande'])
}

}
