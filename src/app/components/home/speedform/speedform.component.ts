import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireServiceService } from 'src/app/formulaire-service.service';

@Component({
  selector: 'app-speedform',
  templateUrl: './speedform.component.html',
  styleUrls: ['./speedform.component.scss']
})
export class SpeedformComponent implements OnInit {
  mobile: boolean;
  nom;
  prenom;
  birth;
  nomControl = new FormControl('', [Validators.required]);
prenomControl = new FormControl('', [Validators.required]);
birthControl = new FormControl('', [Validators.required,Validators.minLength(9)]);

formGroup = new FormGroup({
  first : this.nomControl,
  second : this.prenomControl,
  third : this.birthControl
})

  constructor(private router:Router,private formulaireservice:FormulaireServiceService) { }

  validateAnswers(){
    this.formGroup.markAllAsTouched()
    if ( this.formGroup.valid) {
     
     this.formulaireservice.submitvalue({name:'NOM',value:this.nom.toLocaleUpperCase()})
       this.formulaireservice.submitvalue({name:'PRENOM',value:this.prenom})
      this.formulaireservice.submitvalue({name:'DATE_DE_NAISSANCE',value:this.birth})

    this.router.navigate(['plateforme'], { queryParams: { speedform: 'speedform' } })
    //  this.formulaireservice.changePage();
  }
}


  @HostListener('window:resize', ['$event'])
onResize(event) {
if(window.innerWidth <= 500){
  this.mobile = true
}
else {
  this.mobile = false
}
}
  ngOnInit(): void {
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
  }

}
