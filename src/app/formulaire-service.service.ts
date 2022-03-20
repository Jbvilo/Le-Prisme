import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaireServiceService {
  open: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  setFormsTitle(title){
    setTimeout(() => {
      this.open.emit(title)
    }, 200);
    
  }
}
