import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from './user';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private roleAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  get isRoleAdmin() {
    return this.roleAdmin.asObservable();
  }
  constructor(private http: HttpClient,
              private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8088/vetsis/v1/security/login', { username: username, password: password })
      .map((user: IUser) => {
        if (Object.keys(user).length !== 0) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loggedIn.next(true);
          if (JSON.parse(localStorage.getItem('currentUser'))[0]['role'] === 9) {
            this.roleAdmin.next(true);
          }
        }
        return user;
      });
  }

  logout() {
    this.loggedIn.next(false);
    this.roleAdmin.next(false);
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
  }
}
