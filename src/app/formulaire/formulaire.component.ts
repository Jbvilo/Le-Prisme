import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormulaireServiceService } from '../formulaire-service.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  title;
  @ViewChild('stepper') private myStepper: MatStepper;
 linear:boolean=false;
  mobile: boolean;
  constructor(private formulaireservice:FormulaireServiceService,private router:Router) { 
    window.scrollTo(0,0)
    this.formulaireservice.setFormsTitle("Votre identité")
    this.formulaireservice.open.subscribe(title=> {
      this.title=title
           })


  }

  ngOnInit(): void { 
    if (window.innerWidth<= 500){
      this.mobile = true;
    }
    this.formulaireservice.changePageEvent.subscribe(()=> {
    this.myStepper.next()
           })
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

   
  selectionChange(event) {
  this.formulaireservice.setFormsTitle(event.selectedStep.label)
  }

  goback(){
    this.router.navigate(['/home'])
  }
}
