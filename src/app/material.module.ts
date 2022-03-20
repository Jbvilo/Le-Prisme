import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    exports: [
        MatSliderModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatStepperModule
      ]
    })
export class MaterialModule { }
    