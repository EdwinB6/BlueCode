import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CustomErrorComponent } from './modules/custom-error/custom-error.component';
import { HomeComponent } from './modules/home/home.component';
import { OurServicesComponent } from './modules/our-services/our-services.component';
import { PoliticsComponent } from './modules/politics/politics.component';
import { ButtonGridComponent } from './shared/components/button-grid/button-grid.component';
import { ButtonTableComponent } from './shared/components/button-table/button-table.component';
import { CursorBlinkDirective } from './shared/directives/cursor-blink.directive';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarVerticalComponent } from './core/components/navbar-vertical/navbar-vertical.component';
import { NavbarHorizontalComponent } from './core/components/navbar-horizontal/navbar-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PoliticsComponent,
    OurServicesComponent,
    CustomErrorComponent,
    ContactComponent,
    ButtonGridComponent,
    ButtonTableComponent,
    CursorBlinkDirective,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarVerticalComponent,
    NavbarHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
