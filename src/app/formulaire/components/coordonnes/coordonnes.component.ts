import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-coordonnes',
  templateUrl: './coordonnes.component.html',
  styleUrls: ['./coordonnes.component.scss']
})
export class CoordonnesComponent implements OnInit {
  telephone:string;
  email:string;
  adresse:string;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneControl = new FormControl('', [Validators.required,Validators.minLength(10)]);
  adressControl = new FormControl('', [Validators.required]);

  formGroup = new FormGroup({
    first : this.emailFormControl,
    second : this.phoneControl,
    third : this.adressControl
  })
  constructor(private formulaireservice:FormulaireServiceService) { 
   
  }
  ngOnInit(): void {
   
  }


  validateAnswers(){
    this.formGroup.markAllAsTouched()
    window.scrollTo(0,660)
    if ( this.formGroup.valid) {
    this.formulaireservice.submitvalue({name:"TELEPHONE",value:this.telephone})
    this.formulaireservice.submitvalue({name:'EMAIL',value:this.email})
    this.formulaireservice.submitvalue({name:'ADRESSE',value:this.adresse})
    this.formulaireservice.changePage();
    }
  }
}
