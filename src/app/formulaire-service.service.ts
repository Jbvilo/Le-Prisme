import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormulaireServiceService {
  open: EventEmitter<string> = new EventEmitter<string>();
  changePageEvent:EventEmitter<any> = new EventEmitter<any>();
  values =[];
  set = new Set();
  constructor(private http:HttpClient) {}

  setFormsTitle(title){
    setTimeout(() => {
      this.open.emit(title)
    }, 200);
  }

  changePage(){
      this.changePageEvent.emit();
      console.log(this.values)
  }
  submitvalue(value){
    this.values.push(value)
  }
  sendValues(){
  
   const demande=this.values
   this.values.push({name:"DATE_ARRIVEE",value:"01/05/2022"})
   this.values.push({name:"ETAT",value:"A TRAITER"})
   
    return this.http.post<any>('http://localhost:3000/newDemande',demande)
 
  }
}

