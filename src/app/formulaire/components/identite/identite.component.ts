import { Component, OnInit } from '@angular/core';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-identite',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.scss']
})
export class IdentiteComponent implements OnInit {

  constructor(private formulaireservice:FormulaireServiceService) { 
  
  }

  ngOnInit(): void {

  }

}
