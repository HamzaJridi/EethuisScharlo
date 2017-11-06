import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { ContactComponent } from './pages/contact/contact.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'winkelwagen', component: ShoppingCardComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

export const AppRouting = RouterModule.forRoot(ROUTES, { initialNavigation: false, useHash: true });
