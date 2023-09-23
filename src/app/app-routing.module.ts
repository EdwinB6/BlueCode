import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { PoliticsComponent } from './modules/politics/politics.component';
import { OurServicesComponent } from './modules/our-services/our-services.component';
import { CustomErrorComponent } from './modules/custom-error/custom-error.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: CustomErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
