import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayComponent } from './components/pages/homepage/overlay/overlay.component';
import { SearchComponent } from './components/search/search.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterByBrandComponent } from './components/filter-by-brand/filter-by-brand.component';
import { FilterByColorComponent } from './components/filter-by-color/filter-by-color.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { RentalsComponent } from './components/pages/rentals/rentals.component';
import { CarPageComponent } from './components/pages/car-page/car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayComponent,
    SearchComponent,
    CarsComponent,
    CarCardComponent,
    FilterByBrandComponent,
    FilterByColorComponent,
    CarFilterComponent,
    HomepageComponent,
    FooterComponent,
    CustomersComponent,
    RentalsComponent,
    CarPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
