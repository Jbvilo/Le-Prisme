import { Component, OnInit } from '@angular/core';
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
  constructor(private formulaireservice:FormulaireServiceService) { 
   
  }
  ngOnInit(): void {

  }

  validateAnswers(){
    this.formulaireservice.submitvalue({name:"TELEPHONE",value:this.telephone})
    this.formulaireservice.submitvalue({name:'EMAIL',value:this.email})
    this.formulaireservice.submitvalue({name:'ADRESSE',value:this.adresse})
    this.formulaireservice.changePage();
  }
}
