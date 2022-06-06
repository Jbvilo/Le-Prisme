import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-revenus',
  templateUrl: './revenus.component.html',
  styleUrls: ['./revenus.component.scss']
})
export class RevenusComponent implements OnInit {
  salaire!:boolean;
  chommage!:boolean;
  retraite!:boolean;
  retraitecomplementaire!:boolean;
  pension!:boolean;
  pensionorganisme!:boolean;
  rsa!:boolean;
  allocAAH!:boolean;
  autreremu!:boolean;
  employeur: any;
  organismeretraite: any;
  organismeretraitec: any;
  autretype: any;
  value:number=0;
  mode: ProgressSpinnerMode = 'determinate';
  salairevalue:string;
  chommagevalue!:string;
  retraitevalue!:string;
  retraitecomplementairevalue!:string;
  pensionvalue!:string;
  pensionorganismevalue!:string;
  rsavalue!:string;
  allocAAHvalue!:string;
  autreremuvalue!:string;
  employeurvalue: string;
  organismeretraitevalue: string;
  organismeretraitecvalue: string;
  autretypevalue: string;
  employeurControl = new FormControl('', [Validators.required]);
  retraiteControl = new FormControl('', [Validators.required]);
  retraitecControl = new FormControl('', [Validators.required]);
  pensionControl = new FormControl('', [Validators.required]);
  autreControl= new FormControl('', [Validators.required]);

  constructor(private formulaireservice:FormulaireServiceService) { }

  ngOnInit(): void {
    this.putValueToTrue(true,false,false,false,false,false,false,false,false,false,false,false,false);
  }

  putValueToTrue(a,b,c,d,e,f,g,h,i,j,k,l,m){
    this.salaire=a;
    this.chommage=b;
    this.retraite =c;
    this.retraitecomplementaire=d;
    this.pension=e;
    this.pensionorganisme=f,
    this.rsa=g;
    this.allocAAH=h
    this.autreremu=i;
    this.employeur=j;
    this.organismeretraite=k
    this.organismeretraitec=l;
    this.autretype=m;
  }

  changeview(a){
if(a == 1 ){
  this.employeurControl.markAllAsTouched()
  if(this.employeurControl.valid){
    this.putValueToTrue(false,true,false,false,false,false,false,false,false,false,false,false,false);
    this.value=13
  }
}
if(a == 1.1 ){
    this.putValueToTrue(false,true,false,false,false,false,false,false,false,false,false,false,false);
    this.value=13
}
if(a == 1.5){
  this.putValueToTrue(false,false,false,false,false,false,false,false,false,true,false,false,false);
  this.value=10
}
if(a == 2 ){
  this.putValueToTrue(false,false,true,false,false,false,false,false,false,false,false,false,false);
  this.value=24
}
if(a == 3 ){
  this.retraiteControl.markAllAsTouched()
  if(this.retraiteControl.valid){
  this.putValueToTrue(false,false,false,true,false,false,false,false,false,false,false,false,false);
  this.value=35
  }
}
if(a == 3.1 ){
  this.putValueToTrue(false,false,false,true,false,false,false,false,false,false,false,false,false);
  this.value=35
}
if(a == 3.5 ){
  this.putValueToTrue(false,false,false,false,false,false,false,false,false,false,true,false,false);
  this.value=30
}
if(a == 4 ){
  this.retraitecControl.markAllAsTouched()
  if(this.retraitecControl.valid){
  this.putValueToTrue(false,false,false,false,true,false,false,false,false,false,false,false,false);
  this.value=45
  }
}
if(a == 4.1 ){
  this.putValueToTrue(false,false,false,false,true,false,false,false,false,false,false,false,false);
  this.value=45
}
if(a == 4.5 ){
  this.putValueToTrue(false,false,false,false,false,false,false,false,false,false,false,true,false);
  this.value=40
}
if(a == 5 ){
  this.putValueToTrue(false,false,false,false,false,true,false,false,false,false,false,false,false);
  this.value=60
}
if(a == 6 ){
  this.pensionControl.markAllAsTouched()
  if(this.pensionControl.valid){
  this.putValueToTrue(false,false,false,false,false,false,true,false,false,false,false,false,false);
  this.value=70
  }
}
if(a == 6.1 ){
  this.putValueToTrue(false,false,false,false,false,false,true,false,false,false,false,false,false);
  this.value=70
}
if(a == 7 ){
  this.putValueToTrue(false,false,false,false,false,false,false,true,false,false,false,false,false);
  this.value=80
}
if(a == 8 ){
  this.putValueToTrue(false,false,false,false,false,false,false,false,true,false,false,false,false);
  this.value=85
}
if(a == 9 ){
  this.autreControl.markAllAsTouched()
  if(this.autreControl.valid){
    this.value=100;

    this.formulaireservice.submitvalue({name:'SALAIRE',value :this.salairevalue})
    this.formulaireservice.submitvalue({name:'EMPLOYEUR',value :this.employeurvalue})
    this.formulaireservice.submitvalue({name:'CHOMMAGE',value :this.chommagevalue})
    this.formulaireservice.submitvalue({name:'RETRAITE',value :this.retraitevalue})
    this.formulaireservice.submitvalue({name:'ORGANISME_RETRAITE',value :this.organismeretraitevalue})
    this.formulaireservice.submitvalue({name:'RETRAITE_COMPLEMENTAIRE',value :this.retraitecomplementairevalue})
    this.formulaireservice.submitvalue({name:'ORGANISME_RETRAITE_COMPLEMENTAIRE',value :this.organismeretraitecvalue})
    this.formulaireservice.submitvalue({name:'PENSION',value :this.pensionvalue})
    this.formulaireservice.submitvalue({name:'ORGANISME_PENSION',value :this.pensionorganismevalue})
    this.formulaireservice.submitvalue({name:'RSA',value :this.rsavalue})
    this.formulaireservice.submitvalue({name:'ALLOCATION_AAH',value :this.allocAAHvalue})
    this.formulaireservice.submitvalue({name:'AUTRE_REMUNERATION',value :this.autreremuvalue})
    this.formulaireservice.submitvalue({name:'NOM_AUTRE_REMUNERATION',value :this.autretypevalue})

      setTimeout(() => {
        this.formulaireservice.changePage();
      }, 500);
  }
 }

 if(a == 9.1 ){
  this.value=100;

this.formulaireservice.submitvalue({name:'SALAIRE',value :this.salairevalue})
 this.formulaireservice.submitvalue({name:'EMPLOYEUR',value :this.employeurvalue})
this.formulaireservice.submitvalue({name:'CHOMMAGE',value :this.chommagevalue})
this.formulaireservice.submitvalue({name:'RETRAITE',value :this.retraitevalue})
this.formulaireservice.submitvalue({name:'ORGANISME_RETRAITE',value :this.organismeretraitevalue})
this.formulaireservice.submitvalue({name:'RETRAITE_COMPLEMENTAIRE',value :this.retraitecomplementairevalue})
this.formulaireservice.submitvalue({name:'ORGANISME_RETRAITE_COMPLEMENTAIRE',value :this.organismeretraitecvalue})
this.formulaireservice.submitvalue({name:'PENSION',value :this.pensionvalue})
this.formulaireservice.submitvalue({name:'ORGANISME_PENSION',value :this.pensionorganismevalue})
this.formulaireservice.submitvalue({name:'RSA',value :this.rsavalue})
this.formulaireservice.submitvalue({name:'ALLOCATION_AAH',value :this.allocAAHvalue})
this.formulaireservice.submitvalue({name:'AUTRE_REMUNERATION',value :this.autreremuvalue})
this.formulaireservice.submitvalue({name:'NOM_AUTRE_REMUNERATION',value :this.autretypevalue})


  setTimeout(() => {
    this.formulaireservice.changePage();
  }, 500);
 }

 if(a == 9.5 ){
  this.putValueToTrue(false,false,false,false,false,false,false,false,false,false,false,false,true);
  this.value=90;
}
}


}
