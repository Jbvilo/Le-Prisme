import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccompagnementComponent } from './pages/accompagnement/accompagnement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PlateformeComponent } from './pages/plateforme/plateforme.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"accompagnement", component:AccompagnementComponent},
  {path:"presentation", component:PresentationComponent},
  {path:"plateforme", component:PlateformeComponent},
  {path:"contacts", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
