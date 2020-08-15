import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebCardCarouselComponent } from './web-card-carousel/web-card-carousel.component';
import { WebActiveBetsComponent } from './web-active-bets/web-active-bets.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WebHeaderComponent,
    WebCardCarouselComponent,
    WebActiveBetsComponent
  ],
  imports: [
    BrowserModule
    //,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
