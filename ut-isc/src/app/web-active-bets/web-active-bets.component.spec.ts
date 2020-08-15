import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebActiveBetsComponent } from './web-active-bets.component';

describe('WebActiveBetsComponent', () => {
  let component: WebActiveBetsComponent;
  let fixture: ComponentFixture<WebActiveBetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebActiveBetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebActiveBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
