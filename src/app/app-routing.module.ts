import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AahComponent } from './pages/aah/aah.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HellodjoComponent } from './pages/hellodjo/hellodjo.component';
import { HomeComponent } from './pages/home/home.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { RenovationComponent } from './pages/renovation/renovation.component';
import { ServicesComponent } from './pages/services/services.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"home", component:HomeComponent},
  {path:"presentation", component:PresentationComponent},
  {path:"services", component:ServicesComponent},
  {path:"partenaires", component:PartenairesComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"hellodjo", component:HellodjoComponent},
  {path:"aah", component:AahComponent},
  {path:"renovation", component:RenovationComponent},
  {path:"demande", component:FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
