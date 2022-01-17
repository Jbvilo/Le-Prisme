import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Le Prisme';
  visible: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true
    }, 4500);
  }
}
