import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayComponent } from './components/pages/homepage/overlay/overlay.component';
import { SearchComponent } from './components/search/search.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterByBrandBarComponent } from './components/pages/homepage/filter-by-brand-bar/filter-by-brand-bar.component';
import { FilterByColorComponent } from './components/filter-by-color/filter-by-color.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarPageComponent } from './components/pages/car-page/car-page.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCarDetailPipe } from './pipes/filter-car-detail.pipe';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { SliceBrandPipe } from './pipes/slice-brand.pipe';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { CarsDashboardComponent } from './components/pages/admin-dashboard-page/cars-dashboard/cars-dashboard.component';
import { CarAddFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-edit-form/car-edit-form.component';
import { CarImageFormComponent } from './components/pages/admin-dashboard-page/cars-dashboard/car-image-form/car-image-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { ColorsDashboardComponent } from './components/pages/admin-dashboard-page/colors-dashboard/colors-dashboard.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { ColorAddFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-edit-form/color-edit-form.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { HttpErrorInterceptor } from 'src/interceptors/http-error.interceptor';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { HiddenCreditCardNoPipe } from './pipes/hidden-credit-card-no.pipe';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';
import { HoverDirective } from './directives/hover.directive';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayComponent,
    SearchComponent,
    CarsListComponent,
    CarCardComponent,
    FilterByBrandBarComponent,
    FilterByColorComponent,
    CarFilterComponent,
    HomepageComponent,
    FooterComponent,
    CarPageComponent,
    FilterCarPipe,
    FilterColorPipe,
    FilterBrandPipe,
    FilterCarDetailPipe,
    CarsPageComponent,
    SliceBrandPipe,
    CheckoutPageComponent,
    NotFoundPageComponent,
    AdminDashboardPageComponent,
    CarsDashboardComponent,
    CarAddFormComponent,
    CarEditFormComponent,
    CarImageFormComponent,
    BrandsDashboardComponent,
    ColorsDashboardComponent,
    BrandAddFormComponent,
    BrandEditFormComponent,
    ColorAddFormComponent,
    ColorEditFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LogoutPageComponent,
    LoadingSpinnerComponent,
    AccountPageComponent,
    HiddenCreditCardNoPipe,
    WalletPageComponent,
    HoverDirective,
    PasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    StoreModule.forRoot(AppReducers),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
