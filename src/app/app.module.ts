import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { IdentiteComponent } from './formulaire/components/identite/identite.component';
import { CoordonnesComponent } from './formulaire/components/coordonnes/coordonnes.component';
import { StatutComponent } from './formulaire/components/statut/statut.component';
import { FoyerComponent } from './formulaire/components/foyer/foyer.component';
import { RevenusComponent } from './formulaire/components/revenus/revenus.component';
import { ProjetComponent } from './formulaire/components/projet/projet.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccompagnementComponent } from './pages/accompagnement/accompagnement.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PlateformeComponent } from './pages/plateforme/plateforme.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormulaireComponent,
    IdentiteComponent,
    CoordonnesComponent,
    StatutComponent,
    FoyerComponent,
    RevenusComponent,
    ProjetComponent,
    NavigationBarComponent,
    FooterComponent,
    AccompagnementComponent,
    PresentationComponent,
    PlateformeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
