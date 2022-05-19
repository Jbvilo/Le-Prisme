import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulaireServiceService {
  open: EventEmitter<string> = new EventEmitter<string>();
  changePageEvent: EventEmitter<any> = new EventEmitter<any>();
  values = [];
  apiurl: string;

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.apiurl = 'http://localhost:3000/newDemande'
    }
    else {
      this.apiurl = 'https://myleprismews.herokuapp.com/newDemande'
    }
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
      this.values.push(value)
    }
  }

  addState() {
    let push: Boolean = true;
    this.values.forEach(val => {
      if (val.name == "ETAT") {
        push = false
      }
    })
    if (push) {
      this.values.push({ name: "ETAT", value: "A TRAITER" })
    }
  }

  sendValues() {
    const demande = this.values
    this.addState()
    return this.http.post<any>(this.apiurl, demande)
  }
}
