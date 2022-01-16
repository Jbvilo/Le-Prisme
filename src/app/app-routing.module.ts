import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ServicesComponent } from './pages/services/services.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"home", component:HomeComponent},
  {path:"presentation", component:PresentationComponent},
  {path:"services", component:ServicesComponent},
  {path:"partenaires", component:PartenairesComponent},
  {path:"contacts", component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
