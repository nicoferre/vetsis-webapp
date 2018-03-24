import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../../services/customers/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customerList = [];
  public errorWithService: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.showCustomer().subscribe(
      availableItems =>  {
        this.customerList = availableItems;
      },
      error => this.errorWithService = error
    );
  }
}
