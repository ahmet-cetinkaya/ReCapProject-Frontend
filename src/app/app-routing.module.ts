import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPageComponent } from './components/pages/car-page/car-page.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RentalsComponent } from './components/pages/rentals/rentals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  {
    path: 'cars/brand/:brandId',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'cars/color/:colorId',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'car/:carId',
    pathMatch: 'full',
    component: CarPageComponent,
  },
  { path: 'customers', component: CustomersComponent }, // Test
  { path: 'rentals', component: RentalsComponent }, // Test
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
