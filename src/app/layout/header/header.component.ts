import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public role: any;
  isLoggedIn$: Observable<boolean>;
  isRoleAdmin$: Observable<boolean>;
  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.isRoleAdmin$ = this.authenticationService.isRoleAdmin;
  }

  logout() {
    this.authenticationService.logout();
  }
}
