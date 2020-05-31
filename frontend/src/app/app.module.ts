import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomeComponent } from './_components/home/home.component';
import { LandingComponent } from './_components/landing/landing.component';
import { LoginComponent } from './_components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './_components/register/register.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { EmailComponent } from './_components/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
