import { Component, OnInit } from '@angular/core';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-coordonnes',
  templateUrl: './coordonnes.component.html',
  styleUrls: ['./coordonnes.component.scss']
})
export class CoordonnesComponent implements OnInit {

  constructor(private formulaireservice:FormulaireServiceService) { 
   
  }
  ngOnInit(): void {

  }

}
