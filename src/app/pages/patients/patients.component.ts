import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customers/customer.service';
import {AuthenticationService} from '../../services/login/login.service';
import {PatientService} from '../../services/patients/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public role: any;
  public customerList = [];
  public petList = [];
  public errorWithService: any;
  patient: any = {};
  constructor(private router: Router,
              private customerService: CustomerService,
              private  patientService: PatientService) { }

  ngOnInit() {
    this.showCustomer();
    this.showPets();
  }

  showPets() {
    this.patientService.showPets().subscribe(
      availableItems => {
        this.petList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  showCustomer() {
    this.customerService.showCustomer().subscribe(
      availableItems => {
        this.customerList = availableItems;
      },
      error => this.errorWithService = error
    );
  }
}
