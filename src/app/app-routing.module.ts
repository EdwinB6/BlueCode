import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { CustomErrorComponent } from './pages/custom-error/custom-error.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: '**', component: CustomErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
