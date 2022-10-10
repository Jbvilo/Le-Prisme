import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.scss']
})
export class FoyerComponent implements OnInit {
  habiteseul!:boolean;
  conjoint!:boolean;
  personnesacharge!:boolean;
  propouloc!:boolean;
  habitedanslogement!:boolean;
  mineuracharge!:boolean;
  value:number=0;
  mode: ProgressSpinnerMode = 'determinate';
  habitesolo:string;
  avecconjoint:string;
  adultes:string;
  enfants:string;
  status:string;
  viedanslogement:string;
  adultecontrol = new FormControl('', [Validators.required]);
  mineurcontrol = new FormControl('', [Validators.required]);
  mobile: boolean;


  constructor(private formulaireservice:FormulaireServiceService) { }

  ngOnInit(): void {
    this.putValueToTrue(true,false,false,false,false,false);
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
   }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  if(window.innerWidth <= 500){
    this.mobile = true
  }
  else {
    this.mobile = false
  }
  }



  putValueToTrue(a,b,c,d,e,f) {
    this.habiteseul=a;
    this.conjoint = b;
    this.personnesacharge = c;
    this.mineuracharge = d;
    this.propouloc = e;
    this.habitedanslogement =f;
  }

  changeview(value){
    if(value ==1){
      this.putValueToTrue(false,true,false,false,false,false);
      this.value=16;
    }
    if(value ==2){
      this.putValueToTrue(false,false,true,false,false,false);
      this.value=32;
    }
    if(value ==3){
      this.adultecontrol.markAllAsTouched()
      if(this.adultecontrol.valid){
      this.putValueToTrue(false,false,false,true,false,false);
      this.value=48;
      }
    }
    if(value ==4){
      this.mineurcontrol.markAllAsTouched()
      if(this.mineurcontrol.valid){
      this.putValueToTrue(false,false,false,false,true,false);
      this.value=64;
      }
    }
    if(value ==4.1){
      this.putValueToTrue(false,false,false,false,true,false);
      this.value=64;
    }
    if(value ==5){
      this.putValueToTrue(false,false,false,false,false,true);
      this.value=80;
    }

    if(value ==6) {
      this.value=100
      this.formulaireservice.submitvalue({name:'HABITE_SEUL',value:this.habitesolo})
      this.formulaireservice.submitvalue({name:'AVEC_CONJOINT',value:this.avecconjoint})
      this.formulaireservice.submitvalue({name:'ADULTES_A_CHARGE',value:this.adultes})
      this.formulaireservice.submitvalue({name:'MINEURS_A_CHARGE',value:this.enfants})
      this.formulaireservice.submitvalue({name:'STATUS',value:this.status})
      this.formulaireservice.submitvalue({name:'HABITE_DANS_LOGEMENT',value:this.viedanslogement})
      
      setTimeout(() => {
        this.formulaireservice.changePage();
      }, 500);


    }
 
  }

}
