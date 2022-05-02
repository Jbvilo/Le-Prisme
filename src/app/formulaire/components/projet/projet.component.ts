import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  travauxavant!:boolean
  typedetravaux!:boolean
  propouloc!:boolean
  terminer!:boolean
  travauxoui!:boolean
  travauxoui2!:boolean
  annee!:boolean
  coms!:boolean
  value:number=0;
  mode: ProgressSpinnerMode = 'determinate';
  end!:boolean;
  toiture:boolean;
  fauxplafond:boolean;
  menuiserie:boolean;
  autres:boolean;
  ventilation:boolean;
  desamiantage:boolean;
  antiterm:boolean;
  parasis:boolean;
  fossesept:boolean;
  accesslog:boolean;
  adaptsalldo:boolean;
  miseonormelec:boolean;
  typetravauxchoosed=[];
  descriptionproj:string;
  comsi:string;
  aprestrav:string;
  montantAide:string;
  anneeAide:string;
  organismeaide:string;
  aidestravauxanterieurs:string;
  spinner=true;

  constructor(private formulaireservice:FormulaireServiceService) { }

  ngOnInit(): void {
    this.putValueToTrue(false,true,false,false,false,false,false,false,false)
  }

  putValueToTrue(a,b,c,d,e,f,g,h,i){
    this.travauxavant=a;
    this.typedetravaux=b;
    this.propouloc=c;
    this.terminer=d;
    this.travauxoui=e;
    this.travauxoui2=f;
    this.annee=g;
    this.coms=h;
    this.end=i;
  }

  changeview(a){
    if(a ==1 ){
      this.putValueToTrue(false,true,false,false,false,false,false,false,false)
      this.value=60;
    }
    if(a ==1.5 ){
      this.putValueToTrue(false,false,false,false,true,false,false,false,false)
      this.value=70;
    }
    if(a ==1.70){
      this.putValueToTrue(false,false,false,false,false,false,true,false,false)
      this.value=80;
    }
    if(a ==1.75){
      this.putValueToTrue(false,false,false,false,false,true,false,false,false)
      this.value=90;
    }
    if(a == 2 ){
      this.putValueToTrue(false,false,false,true,false,false,false,false,false)
      this.value=25;
    }
    if(a ==3 ){
      this.putValueToTrue(false,false,true,false,false,false,false,false,false)
      this.value=35;
    }
    if(a ==4 ){
      this.putValueToTrue(true,false,false,false,false,false,false,false,false)
      this.value=50;
    }
    if(a ==5 ){
      this.putValueToTrue(false,false,false,false,false,false,false,true,false)
      this.value=95;
    }
    if(a ==6 ){
      this.value=100;
      this.submitValues();
 
    }
  }



  getCheckboxesValues(){
    if(this.toiture){
      this.typetravauxchoosed.push("Toiture")
    }
    if (this.fauxplafond) {
      this.typetravauxchoosed.push("Faux-plafond")
    }
    if (this.menuiserie) {
      this.typetravauxchoosed.push("Menuiseries")
    }
    if (this.autres) {
      this.typetravauxchoosed.push("Autres")
    } if (this.ventilation) {
      this.typetravauxchoosed.push("Ventilation")
    } if (this.desamiantage) {
      this.typetravauxchoosed.push("Desamiantage")
    } if (this.antiterm) {
      this.typetravauxchoosed.push("Traitement anti-termites")
    } if (this.parasis) {
      this.typetravauxchoosed.push("Renforcement para-sismique")
    } if (this.fossesept) {
      this.typetravauxchoosed.push("Fosse septique")
    } if (this.adaptsalldo) {
      this.typetravauxchoosed.push("Adaptation salle d'eau")
    } if (this.miseonormelec) {
      this.typetravauxchoosed.push("Mise aux normes électriques")
    } 
    if (this.accesslog) {
      this.typetravauxchoosed.push("Accessibilité logement")
    }
  }

  submitValues(){
    this.getCheckboxesValues();
    this.formulaireservice.submitvalue({name:'TRAVAUX_A_FAIRE',value : this.typetravauxchoosed})
    this.formulaireservice.submitvalue({name:'DESCRIPTION_PROJET',value  : this.descriptionproj})
    this.formulaireservice.submitvalue({name:'APRES_TRAVAUX',value : this.aprestrav})
    this.formulaireservice.submitvalue({name:'AIDES_TRAVAUX_ANTERIEURS',value : this.aidestravauxanterieurs})
    this.formulaireservice.submitvalue({name:'ORGANISME_AIDE',value : this.organismeaide})
    this.formulaireservice.submitvalue({name:'ANNEE_AIDE',value : this.montantAide})
    this.formulaireservice.submitvalue({name:'MONTANT_AIDE',value :this.montantAide})
    this.formulaireservice.submitvalue({name:'COMMENTAIRE',value : this.comsi})
this.formulaireservice.sendValues().subscribe(res=>{
 if(res.affectedRows){
  setTimeout(() => {
    this.putValueToTrue(false,false,false,false,false,false,false,false,true)
    this.spinner=false
  }, 500);
 }
 else {
   alert("Erreur dans l'envoi de votre demande ")
 }
})
  }

}
