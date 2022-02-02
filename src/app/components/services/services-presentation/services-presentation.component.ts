import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-presentation',
  templateUrl: './services-presentation.component.html',
  styleUrls: ['./services-presentation.component.scss']
})
export class ServicesPresentationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigateTo(path): void {
    this.route.navigate([path])
  }
}
