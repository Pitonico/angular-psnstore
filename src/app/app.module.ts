import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardPricingTitleComponent } from './components/card/card-pricing/card-pricing-title/card-pricing-title.component';
import { CardPricingValueComponent } from './components/card/card-pricing/card-pricing-value/card-pricing-value.component';
import { MenuBarLogoComponent } from './components/menu-bar/menu-bar-logo/menu-bar-logo.component';
import { MenuBarItensComponent } from './components/menu-bar/menu-bar-itens/menu-bar-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    CardPricingTitleComponent,
    CardPricingValueComponent,
    MenuBarLogoComponent,
    MenuBarItensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
