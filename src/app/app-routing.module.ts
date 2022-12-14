import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


const routes: Routes = [
  {path:"", component:FormulaireComponent},
  {path:"home", component:FormulaireComponent},
  {path:"plateforme", component:FormulaireComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"demande", component:FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
