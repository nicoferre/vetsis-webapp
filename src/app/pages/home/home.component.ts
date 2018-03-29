///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customers/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
