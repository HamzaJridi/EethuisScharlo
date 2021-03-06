import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import {ToastyModule} from 'ng2-toasty';
import { ModalModule } from 'ngx-bootstrap/modal';

/************** component imports **************/
import { AppComponent } from './app.component';
import { AppRouting, ROUTES } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
/************** Providers imports **************/
import { ApiCallsService } from './providers/api-calls.service';
import { NotificationService } from './providers/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    ShoppingCardComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    Ng2Webstorage,
    FormsModule,
    ToastyModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BrowserModule, ToastyModule],
  providers: [ApiCallsService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
