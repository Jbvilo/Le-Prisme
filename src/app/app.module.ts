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
