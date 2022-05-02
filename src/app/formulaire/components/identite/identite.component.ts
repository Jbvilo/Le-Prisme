import { Component, EventEmitter, OnInit } from '@angular/core';
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
  
  constructor(private formulaireservice:FormulaireServiceService) { 
  
  }

  ngOnInit(): void {
      
  }

  validateAnswers(){
     this.formulaireservice.submitvalue({name:'NOM',value:this.nom})
     this.formulaireservice.submitvalue({name:'PRENOM',value:this.prenom})
     this.formulaireservice.submitvalue({name:'DATE_DE_NAISSANCE',value:this.birthdate})
     this.formulaireservice.changePage();
  }

}
