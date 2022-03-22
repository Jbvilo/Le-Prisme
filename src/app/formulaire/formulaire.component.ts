import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaireServiceService } from '../formulaire-service.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  title;
  constructor(private formulaireservice:FormulaireServiceService,private router:Router) { 
    window.scrollTo(0,0)
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

  goback(){
    this.router.navigate(['/home'])
  }
}
