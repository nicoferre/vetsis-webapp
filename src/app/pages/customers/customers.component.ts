import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customers/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customerList = [];
  public errorWithService: any;

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

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
