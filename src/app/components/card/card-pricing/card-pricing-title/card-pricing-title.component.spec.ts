import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricingTitleComponent } from './card-pricing-title.component';

describe('CardPricingTitleComponent', () => {
  let component: CardPricingTitleComponent;
  let fixture: ComponentFixture<CardPricingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPricingTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPricingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
