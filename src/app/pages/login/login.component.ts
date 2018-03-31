import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/login/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showAlert = false;
  loading = false;
  model: any = {};
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          if (0 !== Object.keys(data).length) {
            this.router.navigate(['/customers']);
          } else {
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
          this.showAlert = true;
        });
  }
}
