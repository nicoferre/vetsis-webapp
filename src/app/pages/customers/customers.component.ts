import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customers/customer.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customerList = [];
  public errorWithService: any;
  customers: any = {};

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.showClients();
  }

  showClients() {
    this.customerService.showCustomer().subscribe(
      availableItems => {
        this.customerList = availableItems;
      },
      error => this.errorWithService = error
    );
    this.clearCustomerForm();
  }

  newClient() {
    this.customerService.newClient(this.customers).subscribe(
      client => {
        this.showClients();
      },
      error => this.errorWithService = error
    );
  }

  clearCustomerForm() {
    this.customers.name = null;
    this.customers.lastname = null;
    this.customers.docNum = null;
    this.customers.phone = null;
    this.customers.cellPhone = null;
    this.customers.street = null;
    this.customers.floor = null;
    this.customers.flat = null;
    this.customers.location = null;
    $('.nav-tabs a[href="#showCustomers"]').tab('show');
  }

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        result => this.showClients(),
        error => this.errorWithService = error
      );
    $('.nav-tabs a[href="#showCustomers"]').tab('show');
  }
}
