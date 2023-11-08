import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { InfosComponent } from './views/infos/infos.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { RequestsComponent } from './views/requests/requests.component';
import { FooterComponent } from './components/footer/footer.component';
import { LineComponent } from './components/line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfosComponent,
    ServicesComponent,
    ContactsComponent,
    RequestsComponent,
    FooterComponent,
    LineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
