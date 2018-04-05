import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customers/customer.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public role: any;
  public customerList = [];
  public errorWithService: any;
  patient: any = {};
  constructor(private router: Router,
              private customerService: CustomerService) { }

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
