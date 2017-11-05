import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting, ROUTES } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { HuisComponent } from './pages/huis/huis.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WinkelwagenComponent } from './pages/winkelwagen/winkelwagen.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HuisComponent,
    MenuComponent,
    WinkelwagenComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
