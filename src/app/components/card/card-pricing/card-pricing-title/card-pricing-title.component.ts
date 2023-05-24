import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing-title',
  templateUrl: './card-pricing-title.component.html',
  styleUrls: ['./card-pricing-title.component.css']
})
export class CardPricingTitleComponent {
  @Input() gameTitle: string = "";
}
