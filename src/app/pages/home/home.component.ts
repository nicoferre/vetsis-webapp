///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customers/customer.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    console.info(this.authenticationService.isLoggedIn._isScalar);
  }
}
