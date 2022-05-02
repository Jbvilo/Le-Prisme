import { Component, OnInit } from '@angular/core';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.scss']
})
export class StatutComponent implements OnInit {
  revenufiscal:string;
  part:string;
  constructor(private formulaireservice:FormulaireServiceService) { }

  ngOnInit(): void {
  }
  validateAnswers(){
    this.formulaireservice.submitvalue({name:'REVENU_FISCAL',value:this.revenufiscal})
    this.formulaireservice.submitvalue({name:'PART',value:this.part})
    this.formulaireservice.changePage()
  }
  
}
