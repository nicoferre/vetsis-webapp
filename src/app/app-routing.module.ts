import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from "./pages/customers/customers.component";
import {BillingComponent} from "./pages/billing/billing.component";
import {BoxComponent} from "./pages/box/box.component";
import {HairdressingComponent} from "./pages/hairdressing/hairdressing.component";
import {PatientsComponent} from "./pages/patients/patients.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";
import {StockComponent} from "./pages/stock/stock.component";
import {SuppliersComponent} from "./pages/suppliers/suppliers.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path : 'customers', component: CustomersComponent},
      {path : 'billing', component: BillingComponent},
      {path : 'box', component: BoxComponent},
      {path : 'hairdressing', component: HairdressingComponent},
      {path : 'patients', component: PatientsComponent},
      {path : 'statistics', component: StatisticsComponent},
      {path : 'stock', component: StockComponent},
      {path : 'suppliers', component: SuppliersComponent},
      {path : 'login', component: LoginComponent},
      {path : '', component: LoginComponent},
      {path : '*', component: LoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
