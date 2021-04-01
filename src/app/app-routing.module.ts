import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/guards/admin.guard';
import { LoginGuard } from 'src/guards/login.guard';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { CarAddFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-edit-form/car-edit-form.component';
import { CarImageFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-image-form/car-image-form.component';
import { CarsDashboardComponent } from './components/pages/admin-dashboard-page/cars-dashboard/cars-dashboard.component';
import { ColorAddFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-edit-form/color-edit-form.component';
import { ColorsDashboardComponent } from './components/pages/admin-dashboard-page/colors-dashboard/colors-dashboard.component';
import { CarPageComponent } from './components/pages/car-page/car-page.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  {
    path: 'brand/:brandName',
    component: HomepageComponent,
  },
  {
    path: 'cars',
    component: CarsPageComponent,
  },
  {
    path: 'car/:carId',
    component: CarPageComponent,
  },
  { path: 'checkout', component: CheckoutPageComponent },
  {
    path: 'admin',
    component: AdminDashboardPageComponent,
    canActivate: [LoginGuard, AdminGuard],
    children: [
      {
        path: 'cars',
        component: CarsDashboardComponent,
      },
      {
        path: 'cars/add',
        component: CarAddFormComponent,
      },
      {
        path: 'cars/edit/:id',
        component: CarEditFormComponent,
      },
      {
        path: 'cars/edit/images/:carId',
        component: CarImageFormComponent,
      },
      {
        path: 'brands',
        component: BrandsDashboardComponent,
      },
      {
        path: 'brands/add',
        component: BrandAddFormComponent,
      },
      {
        path: 'brands/edit/:id',
        component: BrandEditFormComponent,
      },
      {
        path: 'colors',
        component: ColorsDashboardComponent,
      },
      {
        path: 'colors/add',
        component: ColorAddFormComponent,
      },
      {
        path: 'colors/edit/:id',
        component: ColorEditFormComponent,
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: RegisterPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  {
    path: 'account',
    canActivate: [LoginGuard],
    component: AccountPageComponent,
  },
  {
    path: 'wallet',
    canActivate: [LoginGuard],
    component: WalletPageComponent,
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
