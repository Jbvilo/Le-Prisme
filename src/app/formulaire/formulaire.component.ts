import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { FormulaireServiceService } from '../formulaire-service.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit,OnDestroy {
  title;
  @ViewChild('stepper') private myStepper: MatStepper;
  linear: boolean = false;
  mobile: boolean;
  constructor(private formulaireservice: FormulaireServiceService, private router: Router, private route: ActivatedRoute,private navigationService:NavigationService) {
    window.scrollTo(0, 0)
    this.formulaireservice.setFormsTitle("Votre identité")
    this.formulaireservice.open.subscribe(title => {
      this.title = title
    })
    this.navigationService.setNavBarClass('navigation-bar-container-black');  

  }
  ngOnDestroy(): void {
  
  }

  scroll(anchor?) {
    let i = 0;
    let interval = setInterval(() => {
      if (i < this.screensize()) {
        window.scroll({ left: 0, top: i = i + 5 })
      } else {
        clearInterval(interval)
      }
    }, 5);
  }


  screensize(): number {
    if (window.screen.height <= 720) {
      return 762;
    }
    if (window.screen.height <= 1080) {
      return 700;
    }
  }

  ngOnInit(): void {
      this.navigationService.setNavBarVisibility(false);



    if (window.innerWidth <= 500) {
      this.mobile = true;
    }
    this.formulaireservice.changePageEvent.subscribe(() => {
      this.myStepper.next()
    })



    this.route.queryParams.subscribe(param => {
      if (param.speedform == "speedform") {
        window.scrollTo(0,780);
        setTimeout(() => {
          this.formulaireservice.changePage()
        }, 100);
       
      }
    })
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 500) {
      this.mobile = true
    }
    else {
      this.mobile = false
    }
  }


  selectionChange(event) {
    this.formulaireservice.setFormsTitle(event.selectedStep.label)
  }

  goback() {
    this.router.navigate(['/home'])
  }
}
