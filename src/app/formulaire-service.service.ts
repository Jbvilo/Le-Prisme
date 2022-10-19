import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaireServiceService {
  open: EventEmitter<string> = new EventEmitter<string>();
  changePageEvent: EventEmitter<any> = new EventEmitter<any>();
  values = [];
  apiurl: string = 'https://myleprismews.herokuapp.com/newDemande';

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  setFormsTitle(title) {
    setTimeout(() => {
      this.open.emit(title)
    }, 200);
  }

  changePage() {
    this.changePageEvent.emit();
  }
  submitvalue(value) {
    let submit: Boolean = true;
    this.values.forEach(val => {
      if (val.name == value.name) {
        submit = false
      }
    })
    if (submit) {
      if (value.value == undefined) {
        value.value = "";
      }
      this.values.push(value)
    }
  }

  addState() {
    let pushstate: Boolean = true;
    let pushDate: Boolean = true ;
    let date = new Date;

    this.values.forEach(val => {
      if (val.name == "ETAT") {
        pushstate = false
      }
      if (val.name == "DATE_ARRIVEE") {
        pushDate = false
      }
    })

    if (pushstate) {
      this.values.push({ name: "ETAT", value: "A TRAITER" })
    }
    if( pushDate) {
      this.values.push({ name: "DATE_ARRIVEE", value: this.datePipe.transform(date.getTime(),"dd/MM/yyyy") })
    }
  }

  sendValues() {
    const demande = this.values
    this.addState()
    return this.http.post<any>(this.apiurl, demande)
  }
}
