import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
    this.navigationService.setNavBarClass('navigation-bar-container-black');
  }

  ngOnInit(): void {
  }

  scroll() {
    this.navigationService.windowScrollBy(1)
  }
  navigate(value) {
    this.navigationService.navigate(value)
  }
}
