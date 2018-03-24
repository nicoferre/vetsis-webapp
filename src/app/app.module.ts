import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftComponent } from './layout/left/left.component';
import { CustomersComponent } from './pages/customers/customers.component';

//bootstrap components
import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

import { PatientsComponent } from './pages/patients/patients.component';
import { HairdressingComponent } from './pages/hairdressing/hairdressing.component';
import { BillingComponent } from './pages/billing/billing.component';
import { BoxComponent } from './pages/box/box.component';
import { StockComponent } from './pages/stock/stock.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { LoginComponent } from './pages/login/login.component';

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
    AppRoutingModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
