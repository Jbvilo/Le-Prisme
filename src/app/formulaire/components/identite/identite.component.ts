import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-identite',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.scss']
})
export class IdentiteComponent implements OnInit {
nom:string;
prenom:string;
birthdate:string;
nomControl = new FormControl('', [Validators.required]);
prenomControl = new FormControl('', [Validators.required]);
birthControl = new FormControl('', [Validators.required,Validators.minLength(9)]);
birthlength;

formGroup = new FormGroup({
  first : this.nomControl,
  second : this.prenomControl,
  third : this.birthControl
})
  
  constructor(private formulaireservice:FormulaireServiceService) { 
  
  }

  ngOnInit(): void {
      
  }

  validateAnswers(){
    this.formGroup.markAllAsTouched()
    window.scrollTo(0,660)
    if ( this.formGroup.valid) {
     this.formulaireservice.submitvalue({name:'NOM',value:this.nom.toLocaleUpperCase()})
     this.formulaireservice.submitvalue({name:'PRENOM',value:this.prenom})
     this.formulaireservice.submitvalue({name:'DATE_DE_NAISSANCE',value:this.birthdate})
     this.formulaireservice.changePage();
  }
}
birthvalue(){

}

}
