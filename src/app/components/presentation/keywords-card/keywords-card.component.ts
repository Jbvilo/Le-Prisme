import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords-card',
  templateUrl: './keywords-card.component.html',
  styleUrls: ['./keywords-card.component.scss']
})
export class KeywordsCardComponent implements OnInit {
chantier:number=0
visible:boolean=false
  constructor() { }

  ngOnInit(): void {
let interval=setInterval(() => {
  this.chantier++
  if(this.chantier == 95){
    clearInterval(interval)
    this.visible=true
  }
}, 30);




  }

}
