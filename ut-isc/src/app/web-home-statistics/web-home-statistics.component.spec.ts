import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHomeStatisticsComponent } from './web-home-statistics.component';

describe('WebHomeStatisticsComponent', () => {
  let component: WebHomeStatisticsComponent;
  let fixture: ComponentFixture<WebHomeStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebHomeStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebHomeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
