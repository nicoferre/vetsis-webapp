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
  public role: any;

  constructor(private customerService: CustomerService,
              private router: Router  ) {
  }

  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem('currentUser'))[0]['role'];
    console.info(this.role);
    this.customerService.showCustomer().subscribe(
      availableItems => {
        this.customerList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  newClient() {
    console.log(this.customers);
    this.customerService.newClient(this.customers).subscribe(
      client => {
        console.log(client);
      },
      error => this.errorWithService = error
    );
  }
}
