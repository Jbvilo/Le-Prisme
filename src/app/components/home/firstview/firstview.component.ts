import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstview',
  templateUrl: './firstview.component.html',
  styleUrls: ['./firstview.component.scss']
})
export class FirstviewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateTo(path) {
this.router.navigate([path])
  }

}
