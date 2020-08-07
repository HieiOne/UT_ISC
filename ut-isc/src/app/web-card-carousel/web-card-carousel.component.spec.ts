import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCardCarouselComponent } from './web-card-carousel.component';

describe('WebCardCarouselComponent', () => {
  let component: WebCardCarouselComponent;
  let fixture: ComponentFixture<WebCardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
