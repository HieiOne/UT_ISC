import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WebHeaderComponent } from "./web-header/web-header.component";
import { WebCardCarouselComponent } from "./web-card-carousel/web-card-carousel.component";
import { WebActiveBetsComponent } from './web-active-bets/web-active-bets.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultimate Team';
  tabTitle = 'Ultimate Team IOSoccer'

  public constructor(private titleService: Title ) {
    titleService.setTitle(this.tabTitle);
  }
}
