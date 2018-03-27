///<reference path="../../node_modules/@angular/http/src/interfaces.d.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {LeftComponent} from './layout/left/left.component';
import {CustomersComponent} from './pages/customers/customers.component';

import {AccordionModule} from 'ngx-bootstrap';
import {AlertModule} from 'ngx-bootstrap';
import {ButtonsModule} from 'ngx-bootstrap';
import {TabsModule} from 'ngx-bootstrap';

import {PatientsComponent} from './pages/patients/patients.component';
import {HairdressingComponent} from './pages/hairdressing/hairdressing.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    CustomersComponent,
    PatientsComponent,
    HairdressingComponent,
    BillingComponent,
    BoxComponent,
    StockComponent,
    StatisticsComponent,
    SuppliersComponent,
    LoginComponent,
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
    AuthenticationService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
