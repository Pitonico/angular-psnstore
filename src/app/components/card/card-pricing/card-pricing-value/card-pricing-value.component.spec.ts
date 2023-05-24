import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricingValueComponent } from './card-pricing-value.component';

describe('CardPricingValueComponent', () => {
  let component: CardPricingValueComponent;
  let fixture: ComponentFixture<CardPricingValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPricingValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPricingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
