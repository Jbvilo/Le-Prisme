import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-keywords-card',
  templateUrl: './keywords-card.component.html',
  styleUrls: ['./keywords-card.component.scss']
})
export class KeywordsCardComponent implements OnInit {
chantier:number=1;
visible:boolean=false

  constructor() {

   }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if(window.scrollY > 200){
    let interval=setInterval(() => {
      if(this.chantier<95){
        this.chantier++
      }
   
      if(this.chantier >= 95){
        clearInterval(interval)
        this.visible=true
      }
    },100);
    }
  }

  ngOnInit(): void {

  }
}
