import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProblemesComponent } from './components/home/problemes/problemes.component';
import { StepsComponent } from './components/home/steps/steps.component';
import { AvantagesComponent } from './components/home/avantages/avantages.component';
import { AvisClientComponent } from './components/home/avis-client/avis-client.component';
import { DefinitionComponent } from './components/presentation/definition/definition.component';
import { IntroductionComponent } from './components/presentation/introduction/introduction.component';
import { ServicesPresentationComponent } from './components/services/services-presentation/services-presentation.component';
import { FirstviewComponent } from './components/home/firstview/firstview.component';
import { KeywordsCardComponent } from './components/presentation/keywords-card/keywords-card.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { HellodjoComponent } from './pages/hellodjo/hellodjo.component';
import { AahComponent } from './pages/aah/aah.component';
import { RenovationComponent } from './pages/renovation/renovation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PresentationComponent,
    PartenairesComponent,
    ContactsComponent,
    WelcomeComponent,
    NavigationBarComponent,
    ProblemesComponent,
    StepsComponent,
    AvantagesComponent,
    AvisClientComponent,
    DefinitionComponent,
    IntroductionComponent,
    ServicesPresentationComponent,
    FirstviewComponent,
    KeywordsCardComponent,
    FormulaireComponent,
    HellodjoComponent,
    AahComponent,
    RenovationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
