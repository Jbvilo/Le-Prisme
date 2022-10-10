import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.scss']
})
export class StatutComponent implements OnInit {
  revenufiscal:string;
  part:string;
  partControl = new FormControl('', [Validators.required]);
  revenuControl  = new FormControl('', [Validators.required]);

  formGroup = new FormGroup({
    first : this.partControl,
    second : this.revenuControl
  })
  constructor(private formulaireservice:FormulaireServiceService) { }

  ngOnInit(): void {
  }
  validateAnswers(){
    this.formGroup.markAllAsTouched()
    if ( this.formGroup.valid) {
    this.formulaireservice.submitvalue({name:'REVENU_FISCAL',value:this.revenufiscal})
    this.formulaireservice.submitvalue({name:'PART',value:this.part})
    this.formulaireservice.changePage()
    }
  }
}
