import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'contact',component:ContactComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'**',component:NotFoundComponent},
];
