import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customers/customer.service';
import {Router} from '@angular/router';
import {ICustomer} from '../../services/customers/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customerList = [];
  public errorWithService: any;
  customers: any = {};

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.customerService.showCustomer().subscribe(
      availableItems => {
        this.customerList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  newClient() {
    this.customerService.newClient(this.customers).subscribe(
      client => {
        console.log(client);
      },
      error => this.errorWithService = error
    );
  }
}
