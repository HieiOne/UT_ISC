import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import "bootstrap/js/dist/collapse";

@Component({
  selector: 'app-web-active-bets',
  templateUrl: './web-active-bets.component.html',
  styleUrls: ['./web-active-bets.component.css']
})
export class WebActiveBetsComponent implements OnInit {

  constructor() { }

  defaultCompetitionRegion = "#EUROPE"; //TO DO --> Select region depending on user

  ngOnInit(): void {
    $( this.defaultCompetitionRegion ).collapse("show"); //Default competition list shown
  }

  onSelect(item): void {
    $('.collapse:not('+item.id+')').collapse("hide");
    $( item.id ).collapse("show");
  }
}
