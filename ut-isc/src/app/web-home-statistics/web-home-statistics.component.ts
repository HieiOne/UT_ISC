import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-web-home-statistics',
  templateUrl: './web-home-statistics.component.html',
  styleUrls: ['./web-home-statistics.component.css']
})
export class WebHomeStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.increaseCounter();
  }

  increaseCounter(): void {
    console.log('Running counter');
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }

  // @ViewChild('statistics') m: ElementRef;
  // private isVisible: boolean = false;

  // ngAfterViewInit(): void
  // {
  //     if (this.isVisible == false && this.m.nativeElement.offsetParent != null)
  //     {
  //         console.log('isVisible switched from false to true');
  //         this.isVisible = true;
  //         this.increaseCounter();
  //     }
  //     else if (this.isVisible == true && this.m.nativeElement.offsetParent == null)
  //     {
  //         console.log('isVisible switched from true to false');
  //         this.isVisible = false;
  //     }
  // }


}
