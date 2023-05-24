import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing-value',
  templateUrl: './card-pricing-value.component.html',
  styleUrls: ['./card-pricing-value.component.css']
})
export class CardPricingValueComponent {
  @Input() gameType: string = "";
  @Input() gamePrice: string = "";
}
