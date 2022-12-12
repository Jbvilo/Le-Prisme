import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-round',
  templateUrl: './button-round.component.html',
  styleUrls: ['./button-round.component.scss']
})
export class ButtonRoundComponent implements OnInit {
  tooltip:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
