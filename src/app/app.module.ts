///<reference path="../../node_modules/@angular/http/src/interfaces.d.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {CustomersComponent} from './pages/customers/customers.component';

import {AccordionModule} from 'ngx-bootstrap';
import {AlertModule} from 'ngx-bootstrap';
import {ButtonsModule} from 'ngx-bootstrap';
import {TabsModule} from 'ngx-bootstrap';

import {PatientsComponent} from './pages/patients/patients.component';
import {BillingComponent} from './pages/billing/billing.component';
import {BoxComponent} from './pages/box/box.component';
import {StockComponent} from './pages/stock/stock.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {SuppliersComponent} from './pages/suppliers/suppliers.component';
import {LoginComponent} from './pages/login/login.component';
import {CustomerService} from './services/customers/customer.service';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from './services/login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards';
import {HomeComponent} from './pages/home/home.component';
import {AdministratorComponent} from './pages/administrator/administrator.component';
import {ProviderService} from './services/providers/provider.service';
import {CategoryService} from './services/category/category.service';
import {ProductsComponent} from './pages/products/products.component';
import {ProductService} from './services/product/product.service';
import {PatientService} from './services/patients/patient.service';
import {SpeciesService} from './services/species/species.service';
import {BreedService} from './services/breed/breed.service';
import {TurnsComponent} from './pages/turns/turns.component';
import {TurnsService} from './services/turns/turns.service';
import {ClinicHistoryComponent} from './pages/clinicHistory/clinicHistory.component';
import {ClinicHistoryService} from './services/clinicHistory/clinicHistory.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    PatientsComponent,
    BillingComponent,
    BoxComponent,
    StockComponent,
    StatisticsComponent,
    SuppliersComponent,
    LoginComponent,
    AdministratorComponent,
    HomeComponent,
    ProductsComponent,
    TurnsComponent,
    ClinicHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [CustomerService,
    ProviderService,
    AuthenticationService,
    CategoryService,
    ProductService,
    PatientService,
    SpeciesService,
    BreedService,
    TurnsService,
    ClinicHistoryService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
