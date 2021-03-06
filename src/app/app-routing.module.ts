import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './pages/customers/customers.component';
import {BillingComponent} from './pages/billing/billing.component';
import {BoxComponent} from './pages/box/box.component';
import {PatientsComponent} from './pages/patients/patients.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {StockComponent} from './pages/stock/stock.component';
import {SuppliersComponent} from './pages/suppliers/suppliers.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './guards';
import {HomeComponent} from './pages/home/home.component';
import {AdministratorComponent} from './pages/administrator/administrator.component';
import {ProductsComponent} from './pages/products/products.component';
import {TurnsComponent} from './pages/turns/turns.component';
import {ClinicHistoryComponent} from './pages/clinicHistory/clinicHistory.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path : 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      {path : 'billing', component: BillingComponent, canActivate: [AuthGuard] },
      {path : 'box', component: BoxComponent, canActivate: [AuthGuard] },
      {path : 'patients', component: PatientsComponent, canActivate: [AuthGuard] },
      {path : 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
      {path : 'stock', component: StockComponent, canActivate: [AuthGuard] },
      {path : 'suppliers', component: SuppliersComponent, canActivate: [AuthGuard] },
      {path : 'home', component: HomeComponent, canActivate: [AuthGuard] },
      {path : 'administrator', component: AdministratorComponent, canActivate: [AuthGuard] },
      {path : 'products', component: ProductsComponent, canActivate: [AuthGuard] },
      {path : 'turns', component: TurnsComponent, canActivate: [AuthGuard] },
      {path : 'clinicHistory', component: ClinicHistoryComponent, canActivate: [AuthGuard] },
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
