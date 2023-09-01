import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { PoliticsComponent } from './modules/politics/politics.component';
import { OurServicesComponent } from './modules/our-services/our-services.component';
import { CustomErrorComponent } from './modules/custom-error/custom-error.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ButtonGridComponent } from './shared/components/button-grid/button-grid.component';
import { ButtonTableComponent } from './shared/components/button-table/button-table.component';
import { FormsModule } from '@angular/forms';
import { CursorBlinkDirective } from './shared/directives/cursor-blink.directive';

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
    CursorBlinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
