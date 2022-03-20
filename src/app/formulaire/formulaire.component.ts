import { Component, OnInit } from '@angular/core';
import { FormulaireServiceService } from '../formulaire-service.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  title;
  constructor(private formulaireservice:FormulaireServiceService) { 
    this.formulaireservice.setFormsTitle("Votre identité")
    this.formulaireservice.open.subscribe(title=> {
      this.title=title
           })

  }

  ngOnInit(): void {
 
  }

  selectionChange(event) {
  this.formulaireservice.setFormsTitle(event.selectedStep.label)
  }

}
